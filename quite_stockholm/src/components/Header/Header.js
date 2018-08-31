import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './Header.css'

class Header extends Component {
  
  render() {
    return (
      <header>
        <div className="logo">
          <h1 className="desctop"> <span className="color1">Quite></span><span className="color2 desctop">Stockholm</span></h1>
          <h1 className="mobile"> <span className="color1">Quite></span></h1>
        </div>
        <div className="navigation">
          <a href="index.html#about"><span className="desctop">Om appen</span><i id="questionMark"className="mobile fas fa-info fa-fw"></i></a>
          <a href="index.html#tip"><span className="desctop">Tipsa</span><i className="mobile fas fa-volume-down fa-fw"></i></a>
        </div>
      </header>
    );
  }
}

export default Header;
