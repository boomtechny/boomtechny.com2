import React from 'react'


import BTAnimation_Full from '../assets/images/btanimation_full.svg'


//

class Hero_Animation extends React.Component{

  render(){
    return( <div className = "hero_animation"> 
      <object className = "hero_animation-full" data={BTAnimation_Full} type="image/svg+xml">
          </object>
 
  </div>)
  }
}
export default Hero_Animation;

