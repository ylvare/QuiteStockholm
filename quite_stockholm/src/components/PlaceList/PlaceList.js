import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './PlaceList.css'
import Place from '../Place/Place'

class PlaceList extends Component {
  render() {
    return (
      <div className="PlacesList">
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
        <Place />
      </div>
      /*
      <div className="PlaceList">
          {this.props.trackList.map(place=>{
          return <Track key = {track.key} track={track} trackAction={this.props.trackAction} trackFunction = {this.props.trackFunction}/>
        })}
     </div>*/

    );
  }
}

export default PlaceList;
