/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Decorator_Square from '../assets/images/decorator_square.svg'

class Profile_Loadout_Card_Text_Additional extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
formatText(text,textkeyid){
  return ( <div className="details__additional_wrapper"><div className="details__additional_decorator">
     <object className="additional__decorator" data={Decorator_Square}/>
     </div>

     <div className="details__additional_text"> <h6 key={textkeyid} >{text}</h6></div></div>)
}
getInfo(texts){
  let textkey = 1;
  return texts.map(this.formatText, textkey);  
}

  render(){
    return(
    
   

     <div className="details__additional_text"> 
     {this.getInfo(this.props.text)}
     
</div>
    

     
    )
  }
}
export default Profile_Loadout_Card_Text_Additional;