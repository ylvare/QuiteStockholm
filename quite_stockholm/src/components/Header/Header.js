import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './Header.css'
import litenLogga from "../../resources/images/litenlogga.png"
import CategorySelect from './CategorySelect/CategorySelect'

class Header extends Component {

  render() {
    return (
      <header>
        <div className="logo">
          <h1 className="desctop"> <span className="color1">Quite></span><span className="color2 desctop">Stockholm</span></h1>
          <h1 className="mobile"> <span className="color1">Quite</span></h1>
        </div>
        <div className="navigation">
          <div className="category-select">
            <CategorySelect />
          </div>
          <a href="index.html#about"><span className="desctop">Om appen</span><i id="questionMark"className="mobile fas fa-info"></i></a>
          <a href="index.html#tip"><span className="desctop">Tipsa</span><i className="mobile fas fa-volume-down"></i></a>
        </div>
      </header>
    );
  }
}

export default Header;
