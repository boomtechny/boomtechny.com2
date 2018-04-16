import React, { PropTypes } from 'react'
import { Link, Route, Component } from 'react-static'




class KeyInfoButtonIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this._setMessage = this._setMessage.bind(this); 
    }
    render() {
        return (<button className ="social-media__icon" ><svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>Layer 1</title>
  <path stroke="#de6705" fill="#de6705" id="Fill-38" d="m32,55.9c-13.2,0 -23.9,-10.7 -23.9,-23.9c0,-13.2 10.7,-23.9 23.9,-23.9s23.9,10.7 23.9,23.9c0,13.2 -10.7,23.9 -23.9,23.9l0,0zm0,-45.2c-11.7,0 -21.3,9.6 -21.3,21.3s9.6,21.3 21.3,21.3s21.3,-9.6 21.3,-21.3s-9.6,-21.3 -21.3,-21.3l0,0z" class="st0"/>
  <polygon stroke="#de6705" fill="#de6705" points="19.300000190734863,30.600006103515625 44.70000076293945,30.600006103515625 44.70000076293945,33.399993896484375 19.300000190734863,33.399993896484375 " id="Fill-39" class="st0"/>
  <polygon stroke="#de6705" fill="#de6705" points="30.59999990463257,19.29998779296875 33.40000009536743,19.29998779296875 33.40000009536743,44.69999694824219 30.59999990463257,44.69999694824219 " id="Fill-40" class="st0"/>
 </g>
</svg> </button>            /*TODO: replace cta-button with button, this can be used globally*/ 
        )
    }
}
export default KeyInfoButtonIcon;