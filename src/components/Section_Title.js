import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'
import Section_TitleSVG from '../assets/images/section_title.svg'




class Section_Title extends React.Component{
  constructor(props){

    super(props); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className ={`section__title` + this.props.pageclassname}>
      {/*<object className = "section__title_background" data={Section_TitleSVG} type=""></object>*/}
      <div className="section__title_background"></div>
      <h1>{this.props.title}</h1>
         </div>
       
          
      )
  }
}
export default Section_Title;