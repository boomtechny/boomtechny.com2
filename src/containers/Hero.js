import React from 'react'
import LocalButton from '../components/LocalButton'
import Hero_Animation from '../components/Hero_Animation'
import Hero_Display_Text from '../components/Hero_Display_Text'
import Indicator_Scroll_Down from '../components/Indicator_Scroll_Down'
import ButtonLink from '../components/Button_Link';
//

class Hero extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    this.handleClick = this.handleClick.bind(this); 
   
    //this._setMessage = this._setMessage.bind(this); 
  }


handleClick(e){
  e.preventDefault();
  
  
  // Scroll to a certain element
  document.querySelector('.section_container__content').scrollIntoView({ 
    block:'start', 
    behavior: 'smooth', 
  });
  setTimeout(function(){
    
    window.scrollBy(0, -200);
  }, 500); 

 // console.log('clicked');
}

  render(){
    return(<section className= "hero"> 
      <Hero_Display_Text/>
      <Hero_Animation/>
      <div className = "hero-cta"> 
      <ButtonLink href="https://github.com/boomtechny" label = "VIEW GITHUB"/>
  <LocalButton scrollto=".contact" label = "CONTACT"/>
  </div>
  <div className="hero__indicator_scroll">
  <svg onClick={this.handleClick} className="scroll_arrow" id="scroll_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="209.8" height="71.2" viewBox="0 0 209.8 71.2"><title>scroll_arrow_fix</title><path id="scroll_arrow_icon" d="M104.9,49.2.7,14.4,0,16,104.9,71.2,209.8,16l-.7-1.5Z" fill="#df3f05"><animateTransform attributeName="transform" type="translate" from="0 0" to="0 74" begin="5s" dur="0.8s" repeatCount="2"/></path><text className="indicator_text" transform="translate(58 14.84)" fontSize="18" fill="#303740" fontFamily="Play-Regular, Play">Scroll Down</text></svg>
  


 {/* <Indicator_Scroll_Down onClick={this.handleClick} source="scroll_arrow.svg"/> */}
 
  </div>

     

      
          
      </section>)
  }
}
export default Hero;
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
