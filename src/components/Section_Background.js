import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'





class Section_Background extends React.Component{
  constructor(props){
   
    
    super(props); 
   
    this.state = {}; 

 //isInView: this.props.hudReveal; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    
let isInView = this.props.reveal;

let newClass = isInView ? '--reveal' + this.props.backgroundpagename: '--hidden';
let newClassBg1 = isInView ? '--reveal grid-add' : '--hidden';
let newClassInner =   isInView ? '--reveal_inner' + this.props.backgroundpagename : '--hidden';
    return(

      <div className = {`section_container__background1 `  + newClass + this.props.backgroundpagename} type=""><div className = {`section_container__background2 ` + newClassInner + this.props. backgroundpagename} type=""></div></div>
      
      
      
         
      
          
      )
  }
}
export default Section_Background;