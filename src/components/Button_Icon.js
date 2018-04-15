import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'




class ButtonIcon extends React.Component{
  constructor(props){
    super(props); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <a href={this.props.link}><button className = "button_icon" value={this.props.value}><object className = "title" data={this.props.iconsrc} type="image/svg+xml">
      </object></button></a>
       //TODO: replace cta-button with button, this can be used globally   
      )
  }
}
export default ButtonIcon;