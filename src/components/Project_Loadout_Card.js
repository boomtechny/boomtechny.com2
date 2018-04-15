/* eslint-disable react/no-unescaped-entities */
import React from 'react'

class Project_Loadout_Card extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className="loadoutcard__wrapper">

     <div className="loadoutcard__label --center">
     {this.props.label}
     </div>

     <div className="loadoutcard__details">
     <div className="loadoutcard__blocktext"> 
     
     
     {this.props.blocktext}
</div>
     </div>

      </div>
    )
  }
}
export default Project_Loadout_Card;