import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

class Section_Content_Wrapper extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
     // pagename: this.props.pagename

    }; 

    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    
    return(
      <div className = {`section__content_wrapper` + this.props.pagename}> 
      {this.props.children}
          
      </div>)
  }
}
export default Section_Content_Wrapper;
