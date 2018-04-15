/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Section_Contact_Title from '../components/Section_Contact_Title'
import Contact_Form from '../components/Contact_Form'
import Section_Content_Wrapper from '../components/Section_Content_Wrapper'
import Contact_Form_Header from '../components/Contact_Form_Header'
import { configureAnchors } from 'react-scrollable-anchor'
import ScrollableAnchor from 'react-scrollable-anchor'
//

class Contact extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  componentWillMount(){
    configureAnchors({offset:-60, scrollDuration: 400});
  }
  render(){
    return(<ScrollableAnchor id={'contact'} ><section className = "contact">
      <Section_Contact_Title title="Contact"  /> 
  <Contact_Form_Header/>
      <Contact_Form />

      </section>
    </ScrollableAnchor>
    
      

      
          
    )
  }
}
export default Contact;