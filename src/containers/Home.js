
import React, {PropTypes} from 'react'
import { Link, Route, Component} from 'react-static'
import Routes from 'react-static-routes'
import Hero from './Hero'
import Work_Featured from './Work_Featured'
import Profile_Summary from './Profile_Summary'
import Work from './Work'
import Contact from '../components/Contact'




class Home extends React.Component{
constructor(){
  super(); 
  this.state = {}; 
  //this._setMessage = this._setMessage.bind(this); 
}
/*setMessage(msg){
 this.setState({message:msg}); 
 alert(this.state.message);
}
*/

  render(){
    return(<div className ="container">
      
      <Hero/>
      <Work_Featured/> 
      <Profile_Summary/>
     
          
      </div>)
  }
}
export default Home;




/*  _handleWaypointLeave = () => {
  console.log('Enter!');
  <Waypoint onLeave={this._handleWaypointLeave}>
<Route component={Hero}>
     </Route>
</Waypoint>
  
  },.
  */
