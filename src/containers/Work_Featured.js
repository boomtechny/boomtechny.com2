
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { getRouteProps, Link } from 'react-static'
import Project_Card from '../components/Project_Card'
import Section_Title from '../components/Section_Title'
import Section_Pattern from '../components/Section_Pattern'
import Section_Content_Wrapper from '../components/Section_Content_Wrapper'
import Section_Background from '../components/Section_Background'
//import data2 from '../projects/projectdata2.json';
//import Decorator_More from '../assets/images/decorator_learnmore.svg'
import Decorator_More_Right from '../assets/images/more_right.svg'
import Decorator_More_Left from '../assets/images/more_left.svg'

//todo: abstract any state or props involved in hud animation to hoc or render props implementation for reuse. 

class Work_Featured extends React.Component{
  
  constructor(){
    super(); 
 
    this.state = {
      hudReveal:false,
      currentBoundingClient:0, 
      cardReveal:false
   
    }
    this.handleScroll = this.handleScroll.bind(this);

   //this.checkState = this.checkState.bind(this);
    //this._setMessage = this._setMessage.bind(this); 
    
  }
  
 

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    const checksection = this.checkSection;
    
    let currentBoundingClient = checksection.getBoundingClientRect().top;
    
    this.setState({currentBoundingClient}); 


    //console.log(currentBoundingClient);

    //console.log(currentBoundingClient);
 
    }
    componentDidUpdate(){
      let clientRectTop = this.state.currentBoundingClient;
     
    if(clientRectTop <= window.innerHeight * 0.75){
      this.setState({hudReveal:true, cardReveal:true});
     
           //console.log('showing');   
            //this.setState({hudReveal:true});
      
        }
      
      }
    shouldComponentUpdate(nextProps, nextState){
return(
  this.state.currentBoundingClient !== nextState.currentBoundingClient  ||
  this.state.hudReveal !== nextState.hudReveal ||
  this.state.cardReveal !== nextState.cardReveal
)
    }
    /*
    componentDidUpdate(){
      //console.log(this.state.currentBoundingClient);
      let clientRectTop = this.state.currentBoundingClient; 
      //console.log(clientRectTop);
     // console.log(window.innerHeight);
      if(clientRectTop <= window.innerHeight * 0.75){
  
       //console.log('showing');   
        this.setState({hudReveal:true});
  
    }
    */
    //if(currentBoundingClient <= window.innerHeight * 0.75 && currentBoundingClient > 0){
//console.log('this should show'); 
    //}
  //  window.addEventListener('scroll', this.handleScroll);
   // const checksection = this.refs.checkSection;
  

  


  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll); 
    
  }


  handleScroll(e){
    e.preventDefault();
    const checksection = this.checkSection;
    //checksection = this.refs.checkSection.classList
  //console.log(checksection); 
 // console.log(checksection.getBoundingClientRect().top)
 // console.log(window.innerHeight);
if(checksection.getBoundingClientRect().top <= window.innerHeight * 0.75 && checksection.getBoundingClientRect().top > 0){
  //console.log('showing');   
  this.setState({hudReveal:true, cardReveal:true});

 // console.log(this.state.hudReveal);
    // checksection.classList.add('showing');
/*
requestAnimationFrame(()=>{this.setState({hudReveal:true}); 
    // 

});
*/
}}


  
    createProjectCards(projects){
      //change to map only the first 3 projects 
    //console.log(animState);
      let index = 0;
      let cardsize = 3; 
      return projects.slice(0,cardsize).map((project,index) => <Project_Card key={project.id} titlehead={project.title} services={project.services} titleimg={project.image} id={project.id} animationstate = {this.state.cardReveal} animDelay={((index*0.5)+1)+'s'}/>); 
      
    }
    
    makeProjectCard(project,index){
    
//console.log('entered');
    //console.log(project);
   
      return <Project_Card key={project.id} titlehead={project.title} services={project.services} titleimg={project.image} id={project.id} animationstate = {false} animDelay={index*0.5+'s'}/>;

    }

  render(){

    //let animState = this.state.projects;
    //console.log(animState);
    return(

    <section ref={(node) => {this.checkSection = node} } className ="section_container featured_work" >
      
      <Section_Title title="Work"  pageclassname=""/> 

      <div className = "section_container__content">
      <Section_Background reveal={this.state.hudReveal} backgroundpagename = {""} />
      <Section_Pattern reveal={this.state.hudReveal} patternpagename = {""} source="pattern.svg"/>
        <Section_Content_Wrapper pagename={" "}>
          <div className = "section_content_wrapper__cards">
    {this.createProjectCards(this.props.projects)}
    <div className="section_container__footer">

<object className="decorator_left" data={Decorator_More_Left}/>


<Link className= "cta-button" to="/work">VIEW ALL</Link>
<object className="decorator_right" data={Decorator_More_Right}/>

</div>
        </div>
      </Section_Content_Wrapper>
      </div>
   
          
      </section>)
  }
}

export default getRouteProps(Work_Featured);

