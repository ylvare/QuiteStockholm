import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './PlaceForm.css'
import {placeTipClean, formattingPlaceFormClean} from '../../constants/constants'

class PlaceForm extends Component {

  constructor(props){
   super(props)

    this.state = {
      placeTip: placeTipClean,
      selectedFile: null,
      formatting: formattingPlaceFormClean
      }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangePhoto = this.handleChangePhoto.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

   handleChangePhoto(e){
     let placeTip = {...this.state.placeTip}
     placeTip['Foto'] = e.target.files[0].name.toLowerCase()
     this.setState({
     placeTip:placeTip,
     selectedFile: e.target.files[0]
     })
   }


  handleSubmit(e) {
    e.preventDefault()
    this.props.addPlaceTip(this.state.placeTip, this.state.selectedFile)
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
          <div className="PlaceForm" id="tip">
            <div className="Thanks" style={this.state.formatting.displayGreeting}><span> Tack för ditt bidrag  <i className="fa fa-heart"></i>  </span></div>
            <div className="Border" style={this.state.formatting.displayForm}>
            <form onSubmit={this.handleSubmit} style={this.state.formatting.displayForm}>
              <div className="Row">
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
              <div className="Row">
                <label>Namn</label>
                <input type="text" id="plats" name="Plats" placeholder="Lugna Baren" onChange={this.handleChange} value={this.state.placeTip.Plats} />
              </div>
              <div className="Row">
                <label>Adress</label>
                <input type="text" name="Adress" placeholder="Tystagatan 22" onChange={this.handleChange} value={this.state.placeTip.Adress}/>
              </div>
              <div className="Row">
                <label>Fotografi</label>
                <input type="file" name="pic" accept="image/*" onChange={this.handleChangePhoto} />
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
