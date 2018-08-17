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
       placeList:[],
       test: "test"
    }

  this.getPlaces = this.getPlaces.bind(this)
}


  componentDidMount = async () => {
  const that = this;
  const refPlaces = Firebase.getUpdates()

  refPlaces.onSnapshot(async function (querySnapshot) {
         const placeList = await that.getPlaces()
         that.setState({
           placeList : placeList})
        })

    const placeList = await this.getPlaces()
    this.setState({
      placeList : placeList})
  }

  async getPlaces(){
      return await Firebase.getPlacesList()
   }

  render() {
    return (
      <div>
        <Header />
        <PlaceList placeList = {this.state.placeList}/>
        <PlaceForm />
      </div>
    );
  }
}

export default App;
