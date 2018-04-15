import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'
import Section_TitleSVG from '../assets/images/section_title.svg'




class Section_Contact_Title extends React.Component{
  constructor(props){

    super(props); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className ="contact_form__title">
      {/*<object className = "section__title_background" data={Section_TitleSVG} type=""></object>*/}
      <div className="contact_section__title_background"></div>
      <h1>{this.props.title}</h1>
         </div>
      
          
      )
  }
}
export default Section_Contact_Title;