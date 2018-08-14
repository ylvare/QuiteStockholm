import React, { Component } from 'react';
import '../../resources/CSS/GeneralStyles.css'
import './Place.css';

class Place extends Component {

  render() {
    return (
      <div className="Place">
         <div className="image-container">
           <img src= {this.props.image} alt=''/>
          </div>
        <div className="text-container">
          <div className="Place-address">
            <h2>{this.props.name}</h2>
            <p>{this.props.category} | {this.props.adress} </p>
          </div>
          <div className="Place-reviews">
            <h3 className="rating"> <i className="fa fa-star"></i> 5 </h3>
          </div>
       </div>
     </div>
    );
  }
}

export default Place;
