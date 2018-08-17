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
}

componentDidMount = async () => {
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
