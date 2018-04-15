/* eslint-disable react/no-unescaped-entities */
import React from 'react'

class Profile_Loadout_Card extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className="loadoutcard__wrapper">

     <div className="loadoutcard__label">
     {this.props.label}
     </div>

     <div className="loadoutcard__details">

     {this.props.children}

     </div>

      </div>
    )
  }
}
export default Profile_Loadout_Card;