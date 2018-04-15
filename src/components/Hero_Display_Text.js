import React from 'react'

import DotPointerImg from '../assets/images/dotcircle_animate_space.svg'
//

class Hero_Display_Text extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(<div className = "hero-display">
  
    <span className ="hero-display_text">
    <object className = "hero-display_icon" data={DotPointerImg} type="image/svg+xml">
          </object>
          <div className="hero__display_list">
        <li>Creative Design</li>
        <li>Progressive Development</li>
        <li>Effective Technology Integration</li>
        <li>Impact Driven Solutions</li>
    </div>
    </span>
  </div>)
  }
}
export default Hero_Display_Text;
/*
export default () => (
 <section className= "hero"> 
  <div className = "hero-display">
    <span className = "hero-display_icon"> 

    </span>
    <span className ="hero-display_text">
      <ol>
        <li>Creative Design</li>
        <li>Progressive Development</li>
        <li>Effective Technology Integration</li>
        <li>Impact Driven Solutions</li>
      </ol>
    </span>
  </div>
  <div className = "hero-animation"> 
  </div>
  <div className = "hero-cta"> 
  <Button label = "CONTACT"/>
  
  </div>
</section>
)
*/
