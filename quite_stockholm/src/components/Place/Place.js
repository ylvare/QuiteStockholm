import React, { Component } from 'react';
import '../../resources/CSS/GeneralStyles.css'
import './Place.css';
import Firebase from '../../Util/Firebase'
import backgroundSvg from "../../resources/images/Q.svg"
import Burst from './Burst/Burst'

class Place extends Component {

  constructor(props){
   super(props)

    this.state = {
       imageRef:'',
       isPlay: true
    }
    this._handleClick = this._handleClick.bind(this)
    this.getImageRef = this.getImageRef.bind(this)
    this._play = this._play.bind(this)
    this._resetPlay = this._resetPlay.bind(this)
}

  _play() { this.setState({ isPlay: true }); }
  _resetPlay() { this.setState({ isPlay: false }); }

  componentDidMount = async () => {
    const imageRef = await this.getImageRef(this.props.place.image)
    this.setState({
      imageRef : imageRef})
    }

   async getImageRef(){
      return await Firebase.getPhotoReference(this.props.place.image)
  }

  _handleClick(e){
    this.refs.child.playAtMouseCursor(e)
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
            <h2>{this.props.place.plats}</h2>
            <p><span>{this.props.place.kategori}</span> | {this.props.place.adress}</p>
          </div>
          <div className="Place-reviews">
            <span className="rating"> {this.props.place.likes} </span>
            <button className="star" onClick={this._handleClick}> <i className="fa fa-star" id="clap--icon"></i> </button>
            <Burst ref="child" isPlay={this.state.isPlay} onComplete={this._resetPlay}/>
          </div>
       </div>
     </div>
    );
  }
}

export default Place;
