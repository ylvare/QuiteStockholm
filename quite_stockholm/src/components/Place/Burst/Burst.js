import React, { Component} from 'react';
import mojs from 'mo-js';


class Burst extends Component {

  constructor(props){
   super(props)
    this.state = {
    }
  }

  render() {
    return (<div></div>);
  }

  shouldComponentUpdate () {
    this.props.isPlay && this._burst.replay();
    return false;
  }

  playAtMouseCursor(e){
  this._burst
    .tune({ x: e.pageX, y: e.pageY })
    .setSpeed(3)
    .replay();
  }

  componentDidMount () {
    this._burst = new mojs.Burst({
     left: 0,
     top: 0,
     count:    200,
     radius:   {5: 25 },
     opacity: {1:0},
     children: {
      shape: 'polygon',
      radius:       3,
      fill:  { 'gold' : 'yellow' },
      duration:     2000
    }
  });
 }
}

export default Burst;
