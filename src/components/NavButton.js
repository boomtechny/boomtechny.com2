import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'




class NavButton extends React.Component{
  constructor(props){
    super(props); 
    this.state = {}; 
    this.handleClick = this.handleClick.bind(this); 
    //this._setMessage = this._setMessage.bind(this); 
  }
handleClick(e){
  e.preventDefault(); 
 

}

  render(){
    return(
      <button onClick={this.handleClick} className = "cta-button" value={this.props.value}>{this.props.label}</button>
       //TODO: replace cta-button with button, this can be used globally , extend also to add link 
      )
  }
}
export default NavButton;