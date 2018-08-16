import React, { Component } from 'react';
import '../../resources/CSS/GeneralStyles.css'
import './Place.css';
import Firebase from '../../Util/Firebase'

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
          backgroundColor: '#E0F2F1',
          height: "16.66rem",
          width: "23rem",
          backgroundImage: `url(${this.state.imageRef}),url("https://vectr.com/ylvare/a3HbWklLK2.svg?width=250&height=250&select=a3HbWklLK2page0")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom:"1rem"
    }
    return (
      <div className="Place">
         <div className="image-container" style={divStyle}>
         </div>
        <div className="text-container">
          <div className="Place-address">
            <h2>{this.props.place.plats}</h2>
            <p>{this.props.place.category} | {this.props.place.adress} </p>
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
