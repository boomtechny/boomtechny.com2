import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'





class Section_Pattern extends React.Component{
  constructor(props){
   
    
    super(props); 
    this.state = {}; 
    this.source = require('../assets/images/'+this.props.source);
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    let isInView = this.props.reveal;
    
    let newClass = isInView ? '--reveal' + this.props.patternpagename: '--hidden';
    let newClassBg1 = isInView ? '--reveal grid-add' : '--hidden';
    return(
    <div className = {`section_container__pattern ` + newClass + this.props.patternpagename}>
    </div>
     
      
         
      
          
      )
  }
}
export default Section_Pattern;