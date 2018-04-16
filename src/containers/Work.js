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



class Work extends React.Component{
  constructor(){
    super(); 
    this.state = {hudReveal:true, cardReveal:true}; 
 
    //this._setMessage = this._setMessage.bind(this); 
    
  }
  createProjectCards(projects){
    //change to map only the first 3 projects 
  //console.log(animState);
    let index = 0;
    
    return projects.map((project,index) => <Project_Card key={project.id} source={project.externallinks[0].url}   keyinfo={project.shortdescription}
      liveurl={project.liveurl} titlehead={project.title} services={project.services} titleimg={project.image} id={project.id} animationstate = {this.state.cardReveal} animDelay={((index*0.5)+1)+'s'}/>); 
    
  }
  
  makeProjectCard(project,index){
  
//console.log('entered');
  //console.log(project);
 
    return <Project_Card key={project.id} source={project.externallinks[0].url}
      liveurl={project.liveurl} titlehead={project.title} services={project.services} titleimg={project.image} id={project.id} animationstate = {false} animDelay={index*0.5+'s'}/>;

  }

  render(){
    return(<section className ="section_container work">
      <Section_Title title="Work" pageclassname=" work__title"/> 

      <div className = "section_container__content work__content">
      <Section_Background backgroundpagename={" work__background"} reveal={this.state.hudReveal}/>
      <Section_Pattern reveal={this.state.hudReveal} patternpagename = {" work__pattern"} source="pattern.svg"/>
        <Section_Content_Wrapper pagename={" work__wrapper"} >
          <div className = "section_content_wrapper__cards work__cards">
        {this.createProjectCards(this.props.projects)}
        </div>
      </Section_Content_Wrapper>
      </div>
    
          
      </section>)
  }
}
export default getRouteProps(Work);


