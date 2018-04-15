import React from 'react'
import { getRouteProps, Link } from 'react-static'


class Project_Icon extends React.Component{
  constructor(props){
    super(props); 

  }

render(){
console.log(this.props.passsvg); 
const make = this.props.move; 
const stuff = document.getElementById(make); 
stuff.append(this.props.passsvg); 
//console.log(stuff);
return(
  <div id = {this.props.move}>{}</div>
)
}
}
export default Project_Icon; 