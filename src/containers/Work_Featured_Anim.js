
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { getRouteProps, Link } from 'react-static'
import Project_Card from '../components/Project_Card'
import Section_Title from '../components/Section_Title'
import Section_Pattern from '../components/Section_Pattern'
import Section_Content_Wrapper from '../components/Section_Content_Wrapper'
import Section_Background from '../components/Section_Background'
//import data2 from '../projects/projectdata2.json';
import Decorator_More from '../assets/images/decorator_learnmore.svg'



class Work_Featured extends React.Component{
  
  constructor(){
    super(); 
     
    this.state = {
      hudReveal:false,
      currentBoundingClient:0, 
      cardReveal:false
    }
    this.handleScroll = this.handleScroll.bind(this);

   
    //this._setMessage = this._setMessage.bind(this); 
    
  }
  

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    const checksection = this.refs.checkSection;
    
    let currentBoundingClient = checksection.getBoundingClientRect().top;
    this.setState({currentBoundingClient}); 
    //console.log(currentBoundingClient);

    //console.log(currentBoundingClient);
 
    

    //if(currentBoundingClient <= window.innerHeight * 0.75 && currentBoundingClient > 0){
//console.log('this should show'); 
    //}
  //  window.addEventListener('scroll', this.handleScroll);
   // const checksection = this.refs.checkSection;
  }
  componentDidUpdate(){
    //console.log(this.state.currentBoundingClient);
    let clientRectTop = this.state.currentBoundingClient; 
    //console.log(clientRectTop);
   // console.log(window.innerHeight);
    if(clientRectTop <= window.innerHeight * 0.75){

     //console.log('showing');   
      this.setState({hudReveal:true});

  }
  
}
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll); 
    
  }

  handleScroll(e){
    e.preventDefault();
    const checksection = this.refs.checkSection;
    //checksection = this.refs.checkSection.classList
  //console.log(checksection); 
 // console.log(checksection.getBoundingClientRect().top)
 // console.log(window.innerHeight);
if(checksection.getBoundingClientRect().top <= window.innerHeight * 0.75 && checksection.getBoundingClientRect().top > 0){
  //console.log('showing');   
  this.setState({hudReveal:true});
  setTimeout(function(){
    this.setState({cardReveal:true}); 
  }, 500);
 // console.log(this.state.hudReveal);
    // checksection.classList.add('showing');
/*
requestAnimationFrame(()=>{this.setState({hudReveal:true}); 
    // 

});
*/
}}


    makeProjectCard(project, index){
     // let inDelay=100*index; 

      return <Project_Card key={project.id} titlehead={project.title} services={project.services} titleimg={project.brand} id={project.id} animDelay={inDelay} animationState={this.state.cardReveal} />;
    }
    createProjectCards(projects){
      //change to map only the first 3 projects 

      return projects.map(this.makeProjectCard, index); 

    }

  render(){
   
    return(<section ref="checkSection" className ="section_container featured_work">
      
      <Section_Title title="Work"/> 

      <div className = "section_container__content">
      <Section_Background reveal={this.state.hudReveal}/>
      <Section_Pattern reveal={this.state.hudReveal}source="pattern.svg"/>
        <Section_Content_Wrapper>
          <div className = "section_content_wrapper__cards">
        {this.createProjectCards(this.props.projects)}
        </div>
      </Section_Content_Wrapper>
      </div>
      <div className="section_container__footer">
        <object className="decorator" data={Decorator_More}/>
        <Link className = "cta-button" to="/work">VIEW ALL</Link>
        </div>
          
      </section>)
  }
}

export default getRouteProps(Work_Featured);

