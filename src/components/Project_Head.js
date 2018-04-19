import React from 'react'
import { getRouteProps, Link } from 'react-static'
import DotPointerImg from '../assets/images/dotcircle_animate_space.svg'
import PlusDecoratorImg from 
"../assets/images/decorator_plus.svg"
import Decorator_Detail from '../assets/images/decorator_detailarrow.svg'
import behanceSvg from '../assets/images/be-icon.svg'
import gitSvg from '../assets/images/git-icon.svg'
import Decorator_Square from '../assets/images/decorator_square_project.svg'
import ReactDOM from 'react-dom'
import LiveButtonIcon from '../components/Live_Button_Icon'


class Project_Head extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
     }; 
 this.generateSVG = this.generateSVG.bind(this); 

    //this._setMessage = this._setMessage.bind(this); 
  }


  componentDidMount(){
this.generateSVG(); 
  }
  
generateSVG(){
  const externallinksvg = this.props.project_externalLinks; 
//console.log(externallinksvg);
//console.log(externallinksvg[0]); 

let svgLocation = this.refs.inlineSVGLocation; 


const testSVG = externallinksvg[0].image; 
//console.log(testSVG); 

const src =  require('../assets/images/'+ testSVG);
//console.log(src); 
const test = src.replace('data:image/svg+xml;base64,', ''); 
//console.log(test);
const result = window.atob(test);
//console.log(result);
const create = document.createRange().createContextualFragment(result); 
//console.log(create);
var icon = create.childNodes[0]; 
//console.log(icon);


externallinksvg.map(function(link){
//var svgIcon = icon; 
//let spanSVG = document.createElement('span', {key:link.id, className:"social-media__icon"}, '');
const spanSVG = document.createRange().createContextualFragment('<span key ="'+ link.id + '"   class="social-media__icon"></span>'
 ); 

const svgLink = document.createRange().createContextualFragment('<a key = "'+ link.id + '" class="follow-link" id="'+link.svgref+ '" href="'+link.url+'"></a>'); 

const imageSVG = link.image; 
const srcSVG =  require('../assets/images/'+ imageSVG);
const stripSVG = srcSVG.replace('data:image/svg+xml;base64,', ''); 
const resultSVG = window.atob(stripSVG);
const createSVG = document.createRange().createContextualFragment(resultSVG); 
const iconSVG = createSVG.childNodes[0]; 
//console.log(srcSVG);
//console.log(iconSVG); 
//console.log(svgLink); 
 //console.log(spanSVG); 

let spanSet = spanSVG.childNodes[0];
let linkSet = svgLink.childNodes[0]; 
 //console.log(spanSet);
 svgLocation.appendChild(spanSet); 
 spanSet.appendChild(linkSet); 
 linkSet.appendChild(iconSVG); 

//linkSet.appendChild(icon); 
 //const spanSet = spanSVG.querySelector("span"); 
//  console.log(spanSet)  
}, this); 


//const checking = document.getElementById()
//console.log(spanSet) ;



//svgLocation.appendChild(spanSVG); 

// <span key = {link.id} className = "social-media__icon">

//  <a key ={link.id} className = "follow-link" ref="likeMe"  href={link.url}>
  


  // </a></span>

//var p = document.createElement("p");

//svgLocation.appendChild(p); 

//svgLocation.appendChild(icon); //this works 
//const svgClass = svgLocation.classList; 
//console.log(svgLocation); 

}
formatIt(textinfo, mykey){
  return <p key = {mykey}className="project_head_shortdescription">{textinfo}</p>
}
    desc(textinfos){
      let thatkey = 1; 
      return textinfos.map(this.formatIt, thatkey); 
    }
  render(){

  const index = 0; 
    return(
      
      <div className = "project_header__wrapper">
 
<div className = "project__grid">
   <div className = "project_image__wrapper">
      <div className ="project__image">
      <a className = "card_livelink" href = {this.props.livelink}/>
      <div className ="project__image__wrapper">
      <img className = "image__wrapper" src={this.props.main_image} />
       </div> 
      </div>
      </div>
  <div className = "project_brief__wrapper">

  <div className = "project_service__wrapper">
<span className ="project_service__grid">
<div className ="project_service__decorator">
  <object className = "service__decorator" data={DotPointerImg} type="image/svg+xml">
        </object>
        </div>
      <div className="project_service__list">

      {this.props.tags.map((service,index)=>
      <li key={index+1}>{service}</li>) }
      </div>
  </span>
</div>


      <div className ="project_short_description_wrapper">
      <span className="project_short_description__grid">
      <div className = "project_short_description__decorator">
      <object className = "short_description__decorator" data = {PlusDecoratorImg}>
      </object>
      </div>
      <div className="project_short_description__text">
      {this.desc(this.props.project_description)}
      </div>
      </span>
      </div>

      <div className = "project_techkeywords__wrapper">
      <span className = "project_techkeywords__grid">
      <div className = "project_techkeywords__decorator">
      <object className="techkeywords__decorator" data={Decorator_Square}></object>
      </div>
      <div className = "project_techkeywords__text">
      {this.props.project_techKeywords}
      </div>
      </span>
      </div>


      <div className = "project_externallinks__wrapper">
      <span className = "project_externallinks__grid">
     
     
      <div className = "project_externallinks__icons" ref="inlineSVGLocation" >
       <LiveButtonIcon href={this.props.livelink}/>
</div>



   

      </span> 
      </div>     

</div>
      
   

      </div>
      </div>
    )
  }
}
  export default Project_Head;