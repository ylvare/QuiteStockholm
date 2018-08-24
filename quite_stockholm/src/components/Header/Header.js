import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <i className="mobile fa fa-star"></i>
          <i className="mobile fa fa-star"></i>
          <i className="mobile fa fa-star"></i>
          <h1 className ="desctop"> <span className="color1">Quite></span><span className="color2">Stockholm</span></h1>
        </div>
        <div className="navigation">
            <nav >
              <a href="index.html#tip">Tipsa</a>
            </nav>
        </div>
      </header>
    );
  }
}

export default Header;
