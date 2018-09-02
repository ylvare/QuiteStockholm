import React, { Component } from 'react';
import '../../resources/CSS/GeneralStyles.css'
import './Place.css';
import Firebase from '../../Util/Firebase'
import backgroundSvg from "../../resources/images/Q.svg"
import mojs from 'mo-js';

class Place extends Component {

  constructor(props){
   super(props)
      this.state = {
         imageRef:'',
         place: {
               Id: this.props.place.id,
               Plats:this.props.place.plats,
               Adress:this.props.place.adress,
               Kategori:this.props.place.kategori,
               Likes:this.props.place.likes,
               Foto:this.props.place.image
            }
         }
      this.handleClick = this.handleClick.bind(this)
      this.getImageRef = this.getImageRef.bind(this)
   }

  componentDidMount = async () => {
    const imageRef = await this.getImageRef(this.props.place.image)
    this.setState({
      imageRef : imageRef})
    }

   async getImageRef(){
      return await Firebase.getPhotoReference(this.state.place.Foto)
  }

  handleClick(e){
    let place = {...this.state.place}
    place['Likes']++;
    this._burst = new mojs.Burst({
      left: 0,
      top: 0,
      count:    60,
      radius:   {5: 25 },
      opacity: {0.6:0},
      children: {
      shape: 'polygon',
      radius:       3,
      fill:  { 'gold' : 'yellow' },
      duration:     2000
      }
    });
    this._burst
      .tune({ x: e.pageX, y: e.pageY })
      .setSpeed(1)
      .replay();

    this.setState({
      place : place})

    Firebase.updatePlaceTip(place)
  }

  render() {
    const divStyle = {
           backgroundImage: `url(${this.state.imageRef}),url(${backgroundSvg})`,
      }

    return (
      <div className="Place">
        <div className="image-container" style={divStyle}>
        </div>
        <div className="text-container">
          <div className="Place-address">
            <h2>{this.state.place.Plats}</h2>
            <p>{this.state.place.Adress}</p>
          </div>
          <div className="Place-reviews">
            <span className="rating"> {this.state.place.Likes} </span>
            <button className="star" onClick={this.handleClick}> <i className="fa fa-star"></i> </button>
          </div>
       </div>
     </div>
    );
  }
}

export default Place;
