import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'
import HUD_patternSVG from '../assets/images/pattern.svg'




class Section_HUD extends React.Component{
  constructor(props){

    super(props); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <object className = "section__hud" data={HUD_patternSVG} type=""></object>
      
         
      
          
      )
  }
}
export default Section_HUD;