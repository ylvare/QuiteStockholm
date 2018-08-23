import React, { Component } from 'react';
import Header from './components/Header/Header'
import PlaceList from './components/PlaceList/PlaceList'
import PlaceForm from './components/PlaceForm/PlaceForm'
import './resources/CSS/GeneralStyles.css'
import './App.css'
import Firebase from './Util/Firebase'

class App extends Component {

  constructor(props){
   super(props)
    this.state = {
       placeList:[]
    }

  this.getPlaces = this.getPlaces.bind(this)
  this.addPlaceTip = this.addPlaceTip.bind(this)
}


  componentDidMount = async () => {
  const placeList = await this.getPlaces()
  this.setState({
      placeList : placeList
    })
  }

  async getPlaces(){
      return await Firebase.getPlacesList()
   }

  addPlaceTip(place,file){
    const that = this;
    const firebase = Firebase.getFirebase()
    Firebase.addPlaceTip(place)
    const uploadTask = Firebase.addPhotoFile(file)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function(snapshot) {
      }, function(error) {
     }, async function() {
         const placeList = await that.getPlaces()
            that.setState({
             placeList : placeList
           })
        })
    }

  render() {
    return (
      <div>
        <Header />
        <PlaceList placeList = {this.state.placeList}/>
        <PlaceForm addPlaceTip = {this.addPlaceTip}/>
      </div>
    );
  }
}

export default App;
