import React, { Component } from 'react';
import '../../resources/CSS/GeneralStyles.css'
import './Place.css';
import Firebase from '../../Util/Firebase'
import backgroundSvg from "../../resources/images/Q.svg"

class Place extends Component {

  constructor(props){
   super(props)

    this.state = {
       imageRef:''
    }
  this.getImageRef = this.getImageRef.bind(this)
}

  componentDidMount = async () => {
    const imageRef = await this.getImageRef(this.props.place.image)
    this.setState({
      imageRef : imageRef})
    }

   async getImageRef(){
      return await Firebase.getPhotoReference(this.props.place.image)
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
            <h3 className="rating"> <i className="fa fa-star"></i> {this.props.place.likes} </h3>
          </div>
       </div>
     </div>
    );
  }
}

export default Place;
