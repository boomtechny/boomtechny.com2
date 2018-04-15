import React from 'react'
import profileImg from '../assets/images/profile-desktop.png'
import crosshairSVG from '../assets/images/crosshair.svg'


class Profile_Image extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className="profile_image__wrapper">
      <div className="profile_image__layer1">
      <img className="profileImage" src={profileImg}></img>
      </div>
      <div className="profile_image__layer2">
      <object className="crosshair" data={crosshairSVG}/>
      </div>

      </div>
    )
  }
}
export default Profile_Image;