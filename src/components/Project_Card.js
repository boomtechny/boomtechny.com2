import React from 'react'
import { Link } from 'react-static'
import DotPointerImg from '../assets/images/bt_dotpointer_icon.svg'

import ButtonIcon from '../components/Button_Icon'
import BTLogoSVG from '../assets/images/logo_bt.svg'
import BeIcon from '../assets/images/be-icon.svg'
import LiveButtonIcon from '../components/Live_Button_Icon'
import GitButtonIcon from '../components/Git_Button_Icon'
import ViewMoreButtonIcon from '../components/ViewMore_Button_Icon'
class Project_Card extends React.Component{
  constructor(){
    super(); 
    this.state = {toggleKeyInfo: 'show'}
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this); 
    this.handleMouseOut = this.handleMouseOut.bind(this); 
    //this._setMessage = this._setMessage.bind(this); 
  }
  handleMouseOver(){
    this.setState({
      toggleKeyInfo: !this.state.toggleKeyInfo}) }

handleMouseOut(){
  this.setState({
    toggleKeyInfo: !this.state.toggleKeyInfo})}



  handleClick() {
    this.setState({toggleKeyInfo: !this.state.toggleKeyInfo}) }

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
    let toggleClass = this.state.toggleKeyInfo ? 'hide': 'show'; 

    return(
      <div className = {`card_wrapper ` + newClass} ref={(node) => {this.cardWrapper = node}}>
      <div className = "card_wrapper__background" type="">
      <button className = "social-media__icon" onClick={this.handleClick}><svg viewBox="8 8 50 50" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>Layer 1</title>
  <path stroke="#de6705" fill="#de6705" id="Fill-38" d="m32,55.9c-13.2,0 -23.9,-10.7 -23.9,-23.9c0,-13.2 10.7,-23.9 23.9,-23.9s23.9,10.7 23.9,23.9c0,13.2 -10.7,23.9 -23.9,23.9l0,0zm0,-45.2c-11.7,0 -21.3,9.6 -21.3,21.3s9.6,21.3 21.3,21.3s21.3,-9.6 21.3,-21.3s-9.6,-21.3 -21.3,-21.3l0,0z" class="st0"/>
  <polygon stroke="#de6705" fill="#de6705" points="19.300000190734863,30.600006103515625 44.70000076293945,30.600006103515625 44.70000076293945,33.399993896484375 19.300000190734863,33.399993896484375 " id="Fill-39" class="st0"/>
  <polygon stroke="#de6705" fill="#de6705" points="30.59999990463257,19.29998779296875 33.40000009536743,19.29998779296875 33.40000009536743,44.69999694824219 30.59999990463257,44.69999694824219 " id="Fill-40" class="st0"/>
 </g>
</svg></button>

        <div className = "card_wrapper__title" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <div className = {`card_keyinfo ` + toggleClass}  >
        <p className="card_keyinfo__text">{this.props.keyinfo} </p>
        </div>
        {/*{this.props.titlehead}*/}
<a className = "card_livelink" href={this.props.livelink}></a>
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
    {/*<Link className="cta-button" to={`/work/project/${this.props.id}/`}>VIEW MORE</Link> */}
      <LiveButtonIcon href={this.props.livelink}/><GitButtonIcon href={this.props.source}/><ViewMoreButtonIcon href={`/work/project/${this.props.id}/`}/>
      </div>
    </div></div>

      
          
      )
  }
}
export default Project_Card;