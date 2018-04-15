/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Decorator_Detail from '../assets/images/decorator_detailarrow.svg'

class Profile_Loadout_Card_Text extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
    
   
<div className="details__wrapper">
     <div className="details__decorator">
     <object className="decorator_detail" data={Decorator_Detail}/>
     </div>

     <div className="details__text"> 
     <h5>{this.props.text}</h5>
     </div>
</div>
    

     
    )
  }
}
export default Profile_Loadout_Card_Text;