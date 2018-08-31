import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './About.css'

class About extends Component {

  constructor(props){
   super(props)

    this.state = {
      }
  }


  render() {
    return (
          <div className="about" id="about">
            <div className="border">
             <div className="text"><span className="bold">Om</span>: Tanken är att guida till platser där man kan höra varandra prata och sig själv tänka.
              Stjärnorna är klickbara.
               <span className="icons">
                  <i className="fas fa-star"></i>
               </span>
              </div>
             </div>
            </div>
        );
    }
}

export default About;
