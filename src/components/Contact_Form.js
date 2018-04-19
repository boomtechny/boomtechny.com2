import React from 'react'
import Button from '../components/Button'
import Contact_FormValidation from '../components/Contact_FormValidation'

//

class Contact_Form extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this);
    
  }
  render(){
    return(<div className = "contact_form__wrapper">
    <div className="contact__form">
    <form action="https://formspree.io/boomtechny@gmail.com" method="post"> 
     <input type ="text" name="contact_name" placeholder="Full Name *"  required/>

     <input type ="email" name = "_replyto" placeholder="Email *" pattern= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/>
     <input type="hidden" name="_subject" value="BoomTech ServiceInquiry" />
     <textarea name ="message" minLength ="10" required placeholder="Message *"></textarea> 
     <div className="form__button">
     <input className="cta-button" type = "submit" value="Send" />
</div>

   </form>
        
</div>
   <Contact_FormValidation  />
      
          
      </div>)
  }
}
export default Contact_Form;

/*<form action="http://formspree.io/you@email.com" method="post">
  <input type="email" name="_replyto">
  <textarea name="body"></textarea>
  <input type="submit" value="Send">
</form>
*/