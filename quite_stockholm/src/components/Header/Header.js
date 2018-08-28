import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <h1 className="desctop"> <span className="color1">Quite></span><span className="color2 desctop">Stockholm</span></h1>
          <h1 className="mobile"> <span className="color1">Q</span></h1>
        </div>
        <div className="navigation">
          <a href=""> &lt; Fika &gt;</a>
          <a href="index.html#tip"><span className="desctop">Tipsa</span><i className="mobile fas fa-volume-down"></i></a>
        </div>
      </header>
    );
  }
}

export default Header;
