import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './PlaceList.css'
import Place from '../Place/Place'

class PlaceList extends Component {
  render() {
    return (
      <div className="PlaceList">
          {this.props.placeList.map(place=>{
          return <Place name={place.name} adress={place.adress} category = {place.category} image = {place.image}/>
        })}
     </div>

    );
  }
}

export default PlaceList;
