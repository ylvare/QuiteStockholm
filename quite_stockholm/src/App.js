import React, { Component } from 'react';
import Header from './components/Header/Header'
import PlaceList from './components/PlaceList/PlaceList'
import PlaceForm from './components/PlaceForm/PlaceForm'
import './resources/CSS/GeneralStyles.css'
import './App.css'
import kb from "./resources/images/kb.jpg"

const place = {
  name: "Kungliga Biblioteket",
  adress: "Humlegårdsgatan 26",
  category: "Läsa/skriva ",
  image: kb
}

const placeList = [place,place,place,place,place,place,place,place]


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PlaceList placeList = {placeList}/>
        <PlaceForm />
      </div>
    );
  }
}

export default App;
