import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './PlaceForm.css'
import Firebase from '../../Util/Firebase'
import {placeTipClean, formattingPlaceFormClean} from '../../constants/app_secrets'

class PlaceForm extends Component {

  constructor(props){
   super(props)

    this.state = {
      placeTip: placeTipClean,
      formatting: formattingPlaceFormClean
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
  }

  handleChange(e) {
    let placeTip = {...this.state.placeTip}
    placeTip[e.target.name] = e.target.value
    let formatting = {...this.state.formatting}
    formatting['grayedOut'] = {
      color:"black"
    }
    this.setState({
    placeTip:placeTip,
    formatting:formatting
    });
  }

  handleSubmit(e) {
  e.preventDefault();
  const placeTip =  { ...this.state.placeTip}
  Firebase.addPlaceTip(placeTip)
  let formatting =  { ...formattingPlaceFormClean}
  formatting['displayForm'] = {
     display:"none"
  }
  formatting['displayGreeting'] = {
     display:"block"
  }

  this.setState({
    placeTip: placeTipClean,
    formatting:formatting
  });
  setTimeout(this.scrollToBottom(), 1000);
}

  render() {

    return (
          <div className="PlaceForm">
            <div className="Thanks" style={this.state.formatting.displayGreeting}><p> Tack för ditt bidrag <i className="fa fa-heart"></i>  </p></div>
            <div className="Border" style={this.state.formatting.displayForm}>
            <form onSubmit={this.handleSubmit} style={this.state.formatting.displayForm}>
              <div>
                <label>Kategori</label>
                <select required name="Kategori" onChange={this.handleChange} value={this.state.placeTip.Kategori} style={this.state.formatting.grayedOut}>
                    <option value="choose" disabled>Välj kategori</option>
                    <option value="Läsa/Skriva">Läsa/Skriva</option>
                    <option value="Fika">Fika</option>
                    <option value="AW">AW</option>
                    <option value="Äta">Äta</option>
                    <option value="Bada">Bada</option>
                </select>
              </div>
              <div>
                <label>Plats</label>
                <input type="text" id="plats" name="Plats" placeholder="Lugna Baren" onChange={this.handleChange} value={this.state.placeTip.Plats} />
              </div>
              <div>
                <label>Adress</label>
                <input type="text" name="Adress" placeholder="Tystagatan 22" onChange={this.handleChange} value={this.state.placeTip.Adress}/>
              </div>
              <div>
                <label>Fotografi</label>
                <input type="file" name="pic" accept="image/*"/>
              </div>
              <div className="button">
                <button>Tipsa</button>
              </div>
            </form>
           </div>
          </div>
        );
    }
}

export default PlaceForm;
