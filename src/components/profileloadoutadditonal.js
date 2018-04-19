/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Decorator_Square from '../assets/images/decorator_square.svg'

class Profile_Loadout_Card_Text_Additional extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }

  formatInfo(shorttext,uniqueid){
  return (<div className="details__additional_wrapper"><div className="details__additional_decorator">
     <object className="additional__decorator" data={Decorator_Square}>
     </object></div> <div className="details__additional_text"> 
     <h6>{shorttext}</h6>
     </div></div>); 
}
    parseInfo(shorttexts){
      let key = 1; 
      return shorttexts.map(this.formatInfo,key); 
    }
  render(){
    return(
    <div>
   {parseInfo(this.props.text)}
</div>
    

     
    )
  }
}
export default Profile_Loadout_Card_Text_Additional;