import React from 'react'

import Project_SubSection from '../components/Project_SubSection'

class Project_Section extends React.Component{
  constructor(props){
    super(props); 
    this.state = {}; 
  
   
    //this._setMessage = this._setMessage.bind(this); 
  }



render(){

 
return(

<div  className = "project_section__wrapper">

{this.props.children}


</div>)

}

}


export default Project_Section; 