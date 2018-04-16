import React, { PropTypes } from 'react'
import { Link, Route, Component } from 'react-static'




class LiveButtonIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this._setMessage = this._setMessage.bind(this); 
    }
    render() {
        return (<span className = "social-media__icon" > <a className="follow-link" href ={this.props.href} > <svg viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg">
 <title/>
 <desc/>
 <g>
  <title>Layer 1</title>
  <path stroke="#000000" stroke-opacity="0" fill="#de6705" id="Shape" d="m10,0c-5.5,0 -10,4.5 -10,10c0,5.5 4.5,10 10,10c5.5,0 10,-4.5 10,-10c0,-5.5 -4.5,-10 -10,-10l0,0zm6.9,6l-2.9,0c-0.3,-1.3 -0.8,-2.4 -1.4,-3.6c1.8,0.7 3.4,1.9 4.3,3.6l0,0zm-6.9,-4c0.8,1.2 1.5,2.5 1.9,4l-3.8,0c0.4,-1.4 1.1,-2.8 1.9,-4l0,0zm-7.7,10c-0.2,-0.6 -0.3,-1.3 -0.3,-2c0,-0.7 0.1,-1.4 0.3,-2l3.4,0c-0.1,0.7 -0.1,1.3 -0.1,2c0,0.7 0.1,1.3 0.1,2l-3.4,0l0,0zm0.8,2l2.9,0c0.3,1.3 0.8,2.4 1.4,3.6c-1.8,-0.7 -3.4,-1.9 -4.3,-3.6l0,0zm2.9,-8l-2.9,0c1,-1.7 2.5,-2.9 4.3,-3.6c-0.6,1.2 -1.1,2.3 -1.4,3.6l0,0zm4,12c-0.8,-1.2 -1.5,-2.5 -1.9,-4l3.8,0c-0.4,1.4 -1.1,2.8 -1.9,4l0,0zm2.3,-6l-4.6,0c-0.1,-0.7 -0.2,-1.3 -0.2,-2c0,-0.7 0.1,-1.3 0.2,-2l4.7,0c0.1,0.7 0.2,1.3 0.2,2c0,0.7 -0.2,1.3 -0.3,2l0,0zm0.3,5.6c0.6,-1.1 1.1,-2.3 1.4,-3.6l2.9,0c-0.9,1.7 -2.5,2.9 -4.3,3.6l0,0zm1.8,-5.6c0.1,-0.7 0.1,-1.3 0.1,-2c0,-0.7 -0.1,-1.3 -0.1,-2l3.4,0c0.2,0.6 0.3,1.3 0.3,2c0,0.7 -0.1,1.4 -0.3,2l-3.4,0l0,0z"/>
 </g>
</svg> </a></span>
            /*TODO: replace cta-button with button, this can be used globally*/ 
        )
    }
}
export default LiveButtonIcon;