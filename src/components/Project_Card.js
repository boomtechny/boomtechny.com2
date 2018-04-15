import React from 'react'
import { Link } from 'react-static'
import DotPointerImg from '../assets/images/bt_dotpointer_icon.svg'

import ButtonIcon from '../components/Button_Icon'
import BTLogoSVG from '../assets/images/logo_bt.svg'
import BeIcon from '../assets/images/be-icon.svg'

class Project_Card extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    
    //this._setMessage = this._setMessage.bind(this); 
  }

  componentDidUpdate(){
    const cardWrapper = this.cardWrapper;
    cardWrapper.setAttribute("style", "animation-delay:"+this.props.animDelay);

  }


  setServiceTag(service, uniqueid){

    return <p key={uniqueid}>{service}</p>; 
  }

  getServiceTags(services){
    let uniqueid = 1; 
    return services.map(this.setServiceTag, uniqueid); 
    }
    
  render(){
    let isInView = this.props.animationstate;
    const cardWrapper = this.cardWrapper;

   // let animationDelay = this.props.animDelay; 
  //console.log(this.props.animationstate);
    let newClass = isInView ? '--revealcard' : '--hiddencard';
    let imagesource = require('../assets/images/' + this.props.titleimg); 
    return(
      <div className = {`card_wrapper ` + newClass} ref={(node) => {this.cardWrapper = node}}>
      <div className = "card_wrapper__background" type="">
        <div className = "card_wrapper__title">
        {/*{this.props.titlehead}*/}

          <object className = "title" data={imagesource} type="image/svg+xml">
          </object>
        </div>
      <div className = "card_wrapper__services">
          <object className = "services__display_icon" data={DotPointerImg} type="image/svg+xml">
          </object>
        <div className = "services__tags">
        {this.getServiceTags(this.props.services)} 
       </div>
      </div>
      <div className="card_wrapper__cta">
        <Link className="cta-button" to={`/work/project/${this.props.id}/`}>VIEW MORE</Link>
      </div>
    </div></div>

      
          
      )
  }
}
export default Project_Card;