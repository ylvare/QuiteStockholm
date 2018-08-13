import React, { Component } from 'react';
import '../../resources/CSS/GeneralStyles.css'
import './Place.css';
import kb from "../../resources/images/kb.jpg"

class Place extends Component {

  render() {
    return (
      <div className="Place">
         <div className="image-container">
           <img src= {kb} alt='Kungliga Biblioteket'/>
          </div>
        <div className="text-container">
          <div className="Place-address">
            <h2>Kungliga Biblioteket</h2>
            <p>Läsa/skriva | Humlegårdsgatan 26 </p>
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
