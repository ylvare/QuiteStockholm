import React, { Component } from 'react';
import '../../../resources/CSS/GeneralStyles.css'
import './Star.css'
import backgroundSvg from "../../../resources/images/Q.svg"
import mojs from 'mo-js';

class Star extends Component {

  constructor(props){
   super(props)
    this.state = {
    }
  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <button id="clap" className="clap">
        <span>
          <i className="fa fa-star" id="clap--icon"></i>
        </span>
        <span id="clap--count" className="clap--count"></span>
        <span id="clap--count-total" className="clap--count-total"></span>
      </button>
    )
 }
}
export default Star;
