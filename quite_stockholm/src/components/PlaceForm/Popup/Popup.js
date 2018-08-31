import React, { Component } from 'react'
import '../../../resources/CSS/GeneralStyles.css'
import './Popup.css'

class Popup extends Component {

  render() {
    console.log("in here")
    return (
      <div className='popup'>
        <div className='popup_inner'>
           <p className="text">{this.props.text}</p>
           <button className="ok" id="ok" onClick={this.props.closePopup}>Ok</button>
        </div>
      </div>
    );
  }
}

export default Popup;
