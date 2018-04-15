/* eslint-disable react/no-unescaped-entities */
import React from 'react'


class Profile_DetailText extends React.Component{
  constructor(props){
    super(props); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    let isInView = this.props.reveal;
    
    let labelClass = isInView ? '--labelreveal' : '--labelhidden';
    let detailClass = isInView ? '--detailreveal' : '--detailhidden';
    let customClass = this.props.customclass ? this.props.customclass : ' '; 
    
    return(
      <div className="detailtext__wrapper">
      <p className={`detailtext__label ` + labelClass}>
      {this.props.label}
      </p>
   <p className ={`detailtext__detail ` + detailClass + customClass} >
      {this.props.detail}
      </p>
      </div>
    )
  }
}
export default Profile_DetailText;