import React from 'react'
import { getRouteProps, Link } from 'react-static'
import DotPointerImg from '../assets/images/dotcircle_animate_space.svg'
import PlusDecoratorImg from 
"../assets/images/decorator_plus.svg"
import Decorator_Detail from '../assets/images/decorator_detailarrow.svg'
import behanceSvg from '../assets/images/be-icon.svg'
import gitSvg from '../assets/images/git-icon.svg'
import ReactDOM from 'react-dom'
import Project_Icon from '../components/Project_Icon'


class Project_Head extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
     }; 
 
   
    //this._setMessage = this._setMessage.bind(this); 
  }
  componentDidMount(){

  }


  getSVG(svg){
const src =  require('../assets/images/'+ svg); 
const test = src.replace('data:image/svg+xml;base64,', ''); 
const svggoto = this.mysvg;
const result = window.atob(test);
const resultnosvg = result.replace('<svg', ''); 
const resultnoclosesvg = resultnosvg.replace('</svg>', '');
const create = document.createRange().createDocumentFragment(result); 
//console.log(svg);
//console.log(src);
//console.log(resultnoclosesvg); 
//const create = React.createElement(svg, null, result);


//console.log(svggoto.className);
//setTimeout(function(){
 // const create = document.createRange().createContextualFragment(result); 
  //svggoto.appendChild(create);
 //}.bind(this),100);

 
//console.log(create);
//console.log(create);

 
//let create = document.createRange().createContextualFragment(result);  
//const testReactcomp = React.createElement('SVGElement', null, create);

//console.log(create); 

//const svggoto = this.testSVG; 
//svggoto.appendChild("<div></div>"); //this would require using settimeout due to how react works it would see append value as null first. 

//const create = React.createElement('svg', null, result);
//create.innerHTML = result; 
//const output = src.contentDocumnet; 
//const result = window.atob(src); 
//console.log(test);
//console.log(result);
//return(<div>{}</div>); 
//return({result})
  }

  /*
  shouldComponentUpdate(nextProps, nextState){
   return true;
  }

  componentDidUpdate(){
    console.log(this.state.svgGenerate);
  }
*/
  createSVGIcons(externallinksvg){
   

const svgIcon = (image) => 

{

  if(image){
    var domreference = image.replace('-icon.svg',''); 
    
   // const tom = mary.classList; 
    //console.log(tom); 

    console.log(domreference);
    console.log(image);
   const src =  require('../assets/images/'+ image);
   console.log(src); 
   const test = src.replace('data:image/svg+xml;base64,', ''); 
   console.log(test);
   const result = window.atob(test);
   //const create = document.createRange().createContextualFragment(result); 
   console.log(result);
   const create = document.createRange().createContextualFragment(result); 
   console.log(create);
var icon = create.childNodes[0]; 
  
    //console.log(icon);
    const iconquery = create.querySelector("svg"); 
    //console.log(mary);
    //console.log(iconquery);
   //var findLink = document.getElementById(domreference); 

    //const svgTest = React.createElement('div', {id:domreference}, 'one'  );
    //console.log(svgTest);
    //const remy = document.getElementById(domreference); 
   // console.log(findLink);

    
//findLink.appendChild('<div></div>');

 //remy.appendChild(icon); 
//return svgTest; 
//findLink.append(iconquery);
    //console.log(stuff); 
    

    

   // this.setState({svgGenerate:this.state.svgGenerate.concat([icon])}); 
    //console.log(findLink);
    //this.setState({svgGenerate:icon}); 
    //findLink.appendChild(icon); 
//findLink.innerHTML =icon; 
    //console.log(findLink.classList);
//this.forceUpdate();

    //findLink.append(icon); 
  //  this.forceUpdate();
  }  
  
 // console.log(icon);
 // const findLink = document.getElementById(domreference); 
 // console.log(findLink);
  //console.log(icon);
 // console.log(findLink);
 // findLink.appendChild(icon);

}
//var mary = 'very';
//console.log(mary); 

return(
  
    externallinksvg.map(link=>

      <span key = {link.id} className = "social-media__icon">

      <a key ={link.id} className = "follow-link" ref="likeMe"  href={link.url}>
      {svgIcon(link.image)}


       </a></span>
          
          ))}
        
  render(){

  const index = 0; 
    return(
      
      <div className = "project_header__wrapper">
 

   <div className = "project_image__wrapper">
      
      <object className = "project__image" data={this.props.main_image} type="image/svg+xml">
          </object>
      
      </div>
  <div className = "project_brief__wrapper">

  <div className = "project_service__wrapper">
<span className ="project_service__grid">
  <object className = "project_service__decorator" data={DotPointerImg} type="image/svg+xml">
        </object>
      <div className="project_service__list">

      {this.props.tags.map((service,index)=>
      <li key={index+1}>{service}</li>) }
      </div>
  </span>
</div>


      <div className ="project_short_description_wrapper">
      <div className="project_short_description__grid">
      <object className = "project_short_description__decorator" data = {PlusDecoratorImg}>
      </object>
      <div className="project_short_description__text">
      {this.props.project_description}
      </div>
      </div>
      </div>

      <div className = "project_techkeywords__wrapper">
      <div className = "project_techkeywords__grid">
      <object className="project_techkeywords__decorator" data={Decorator_Detail}></object>
      <div className = "project_techkeywords__text">
      {this.props.project_techKeywords}
      </div>
      </div>
      </div>


      <div className = "project_externallinks__wrapper">
      <div className = "project_externallinks__grid">
      <div className = "project_externallinks__icons">
{this.createSVGIcons(this.props.project_externalLinks)}


      </div>
      </div> 
      </div>     


      
   

      </div>
      </div>
    )
  }
}
  export default Project_Head;