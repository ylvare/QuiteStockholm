import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import PlaceList from './components/PlaceList/PlaceList'
import PlaceForm from './components/PlaceForm/PlaceForm'
import './resources/CSS/GeneralStyles.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PlaceList />
        <PlaceForm />
      </div>
    );
  }
}

export default App;
