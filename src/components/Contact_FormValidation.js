import React from 'react'


import Decorator_Contact_Form_Feedback from '../assets/images/contact_decorator_caution-01.svg'
//


class Contact_FormValidation extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
     
    }; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className = "contact_form__validation_wrapper">
      <h3 className="contact_form_validation__message">   

 </h3>
 
      <object className="contact_form_validation__decorator" data={Decorator_Contact_Form_Feedback}/>

      
     
   
      </div>
    )
  }
}
export default Contact_FormValidation;