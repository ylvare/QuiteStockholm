import React, { Component } from 'react'
import '../../resources/CSS/GeneralStyles.css'
import './PlaceForm.css'

class PlaceForm extends Component {
  render() {
    return (
          <div className="PlaceForm">
            <div className="Border">
            <form action="/my-handling-form-page" method="post">
              <div>
                <label for="category">Kategori</label>
                <select id="category">
                    <option value=""></option>
                    <option value="work">Läsa/Skriva</option>
                    <option value="fika">Fika</option>
                    <option value="AW">AW</option>
                    <option value="eat">Äta</option>
                    <option value="bathing">Bada</option>
                </select>
              </div>
              <div>
                <label for="place">Plats</label>
                <input type="text" id="plats" name="place"/>
              </div>

              <div>
                <label for="address">Adress</label>
                <input type="text" id="address" name="address"/>
              </div>
              <div>
                <label for="photo">Fotografi</label>
                <input type="file" name="pic" accept="image/*"/>
              </div>
              <div className="button">
                <button type="submit">Tipsa</button>
              </div>
            </form>
           </div>
          </div>
    );
  }
}

export default PlaceForm;
