import React, { Component } from 'react';
import '../../resources/CSS/GeneralStyles.css'
import './Place.css';

class Place extends Component {

  render() {
    return (
      <div className="Place">
         <div className="image-container">
           <img src= "https://www.kb.se/images/200.79af2634160551e354b444/1513608957727/stora-lasesalen2000x1000.jpg" alt=''/>
          </div>
        <div className="text-container">
          <div className="Place-address">
            <h2>{this.props.place.plats}</h2>
            <p>{this.props.place.category} | {this.props.place.adress} </p>
          </div>
          <div className="Place-reviews">
            <h3 className="rating"> <i className="fa fa-star"></i> {this.props.place.likes} </h3>
          </div>
       </div>
     </div>
    );
  }
}

export default Place;
