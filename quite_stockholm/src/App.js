import React, { Component } from 'react';
import Header from './components/Header/Header'
import PlaceList from './components/PlaceList/PlaceList'
import PlaceForm from './components/PlaceForm/PlaceForm'
import './resources/CSS/GeneralStyles.css'
import './App.css'
import kb from "./resources/images/kb.jpg"
import Firebase from './Util/Firebase'

class App extends Component {

  constructor(props){
   super(props)

    this.state = {
       placeList:[]
    }
  this.getPlaces = this.getPlaces.bind(this)
}

componentDidMount = async () => {
  const placeList = await this.getPlaces()
  this.setState({
    placeList : placeList});
  }

  async getPlaces(){
      const placeList = []
      const querySnapshot = await Firebase.getPlacesList()
       querySnapshot.forEach(function(doc) {
           const data = doc.data()
           const place = {
             id: doc.id,
             plats: data.Plats,
             adress: data.Adress,
             category: data.Kategori,
             likes: data.Likes,
             image: kb
           }
          placeList.push(place)
       });
     return placeList
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
