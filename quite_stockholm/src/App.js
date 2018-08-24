import React, { Component } from 'react';
import Header from './components/Header/Header'
import PlaceList from './components/PlaceList/PlaceList'
import PlaceForm from './components/PlaceForm/PlaceForm'
import './resources/CSS/GeneralStyles.css'
import './App.css'
import Firebase from './Util/Firebase'
import ImageTools from './Util/ImageTools'

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

    const that = this;
    const refPlaces = Firebase.getPlacesRef()
    refPlaces.onSnapshot(async function (querySnapshot) {
           const placeList = await that.getPlaces()
           that.setState({
             placeList : placeList})
           })
    }

  async getPlaces(){
      return await Firebase.getPlacesList()
   }

  async addPlaceTip(place,file){
    const imageTools = new ImageTools()
    const size = {height: 500, width: 500}
    const uploadTask = Firebase.addPhotoFile(await imageTools.resize(file,size), file.name)
    uploadTask.on('state_changed', function(snapshot){
        }, function(error) {
          // Handle unsuccessful uploads
        }, async function() {
            Firebase.addPlaceTip(place)
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
