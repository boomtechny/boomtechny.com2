import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'





class Indicator_Scroll_Down extends React.Component{
  constructor(props){
   
    
    super(props); 
    this.state = {}; 
    this.source = require('../assets/images/'+this.props.source);
    

    //this._setMessage = this._setMessage.bind(this); 
  }


  render(){
    
    return(
    
      <object className = "indicator_scroll" data={this.source} type="image/svg+xml"></object>
      
         
      
          
      )
  }
}
export default Indicator_Scroll_Down;