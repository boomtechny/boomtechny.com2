import React, { PropTypes } from 'react'
import { Link, Route, Component } from 'react-static'




class ViewMoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this._setMessage = this._setMessage.bind(this); 
    }
    render() {
        return (<span className = "social-media__icon" > <a className="follow-link" href = { this.props.href } > <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
 <title/>
 <desc/>
 <g>
  <title>Layer 1</title>
  <path fill="#de6705" id="Shape" d="m9,15l2,0l0,-6l-2,0l0,6l0,0zm1,-15c-5.5,0 -10,4.5 -10,10c0,5.5 4.5,10 10,10c5.5,0 10,-4.5 10,-10c0,-5.5 -4.5,-10 -10,-10l0,0zm0,18c-4.4,0 -8,-3.6 -8,-8c0,-4.4 3.6,-8 8,-8c4.4,0 8,3.6 8,8c0,4.4 -3.6,8 -8,8l0,0zm-1,-11l2,0l0,-2l-2,0l0,2l0,0z" />
 </g>
</svg> </a></span>
            /*TODO: replace cta-button with button, this can be used globally*/ 
        )
    }
}
export default ViewMoreButton;