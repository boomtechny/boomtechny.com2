import React from 'react'


import Decorator_Contact_Header_Body from '../assets/images/bt_dotpointer_icon_limit.svg'
import Decorator_Contact_Header_Width from '../assets/images/decorator_contact_header_width_fix.svg'
import Icon_Email from '../assets/images/icon_email.svg'
//


class Contact_Form_Header extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className = "contact_form_header__wrapper">

      <div className= "contact_form_header__text">

<div className="contact_form_header__instructions">
      <object className="instructions__decorator" data={Decorator_Contact_Header_Body}/>
      <h5 className="instructions__text">Complete the Following Form For Any Inquiries.   
 </h5>
 </div>

 <div className="contact_form_header__email">
 <object className = "email__icon" data={Icon_Email}></object>
 <p className="email__details"> boomtechny@gmail.com</p></div>

      <p className = "instructions__required">* All fields Required</p>


 </div>
       
      <object className="decorator_contact_header_width" data={Decorator_Contact_Header_Width}/>
    </div>

    )
  }
}
export default Contact_Form_Header;