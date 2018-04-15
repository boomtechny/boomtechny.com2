import React from 'react'
import { getRouteProps, Link } from 'react-static'
import DotPointerImg from '../assets/images/bt_dotpointer_icon.svg'
import Button from '../components/Button'
import ButtonIcon from '../components/Button_Icon'
import BTLogoSVG from '../assets/images/logo_bt.svg'
import BeIcon from '../assets/images/be-icon.svg'

class Project_Card extends React.Component{
  constructor(){
    super(); 
    this.state = {}; 
    //this._setMessage = this._setMessage.bind(this); 
  }
  render(){
    return(
      <div className = "card_wrapper">
      <div className = "card_wrapper__background" type="">
        <div className = "card_wrapper__title">
          <object className = "title" data={BTLogoSVG} type="image/svg+xml">
          </object>
        </div>
      <div className = "card_wrapper__services">
          <object className = "services__display_icon" data={DotPointerImg} type="image/svg+xml">
          </object>
        <div className = "services__tags">
          <p>BRAND IDENITY</p>
          <p>WEB DEVELOPMENT</p>
          <p>GRAPHIC DESIGN</p> 
       </div>
      </div>
      <div className="card_wrapper__links">
        <ButtonIcon iconsrc={BeIcon} link="https://www.behance.net/boomtech"/>
      </div>
      <div className="card_wrapper__cta">
        <Button label = "VIEW MORE"/>
      </div>
      
      </div></div>

      
          
      )
  }
}
export default Project_Card;