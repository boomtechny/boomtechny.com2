import React from 'react'
import { getRouteProps, Link } from 'react-static'
import Project_Head from '../components/Project_Head'

import Section_Background from '../components/Section_Background'
import Section_Pattern from '../components/Section_Pattern'
import Section_Content_Wrapper from '../components/Section_Content_Wrapper'

import Project_Section from '../components/Project_Section'
import Project_SubSection from '../components/Project_SubSection'

class Project extends React.Component{
  constructor(props){
    super(props); 
    this.state = {hudReveal:true, dataproject:this.props.project.sections, adjustScrollBy:0}; 
    this.handleProjectClick = this.handleProjectClick.bind(this); 
   
    //this._setMessage = this._setMessage.bind(this); 
  }
  componentDidMount(){
    //const fixedheaderHeight = document.querySelector('.header').offsetHeight(); 
 // this.setState({adjustScrollBy:fixedheaderHeight});
  }
handleProjectClick(e){
  e.preventDefault();

 // let adjustScrollBy = fixedheaderHeight*-1; 
  // Scroll to a certain element
  
  document.querySelector('.project_content').scrollIntoView({ 
    
    block:'start', 
    behavior: 'smooth'

  });
  setTimeout(function(){
    
    window.scrollBy(0, -250);
  }, 500); 

 // console.log('clicked');
}


componentDidMount(){
//  this.createProjectSections(this.props.project.sections); 
}

createProjectSections(sections){
  const children = (subsections)=>
  {
    if(subsections){
      return(subsections.map(subsection=>
     
    
     <Project_SubSection key = {subsection.id} subsectionid = {subsection.id} subsectioninfoblock ={subsection.information} subsectionimages = {subsection.images} subsectiontitle={subsection.title}  ></Project_SubSection>))
    }
  }
 
  return(sections.map(section=>
<Project_Section key = {section.sectionid} title = {section.sectiontitle}>
    {children(section.subsections)}</Project_Section>))

  }

render(){
  let defaultdata = [{"sectionid":1, "sectiontitle":"Test"}]; 
 let projectcard = this.props.project; 
  let imagesource = require('../assets/images/' + projectcard.image); 

return(
  
  <article className = "project__container">
  <header className = "project__header">

  <Project_Head main_image = {imagesource} 
          livelink={projectcard.liveurl} tags={projectcard.services} project_title ={projectcard.title} project_description={projectcard.shortdescription} project_techKeywords={projectcard.techKeywords} project_externalLinks={projectcard.externallinks}/>

  <div className="hero__indicator_scroll project">


  <svg onClick={this.handleProjectClick} className="scroll_arrow" id="scroll_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="209.8" height="71.2" viewBox="0 0 209.8 71.2"><title>scroll_arrow_fix</title><path id="scroll_arrow_icon" d="M104.9,49.2.7,14.4,0,16,104.9,71.2,209.8,16l-.7-1.5Z" fill="#df3f05">
  <animateTransform attributeName="transform" type="translate" from="0 0" to="0 74" begin="5s" dur="0.8s" repeatCount="2"/></path><text className="indicator_text" transform="translate(58 14.84)" fontSize="18" fill="#303740" fontFamily="Play-Regular, Play">Scroll Down</text></svg>
 
  </div></header>




  <section className = "section_container project">
  <div className = "section_container__content project_content">
  <Section_Background backgroundpagename={" project__background"}
  reveal={this.state.hudReveal}/>
  <Section_Pattern reveal={this.state.hudReveal} patternpagename ={" project__pattern"} source="pattern.svg"/>
  <Section_Content_Wrapper pagename={" project_content__wrapper"}>
{this.createProjectSections(projectcard.sections)}
    </Section_Content_Wrapper>



 

  </div>
  </section>
  </article>
)


}
}
/*
Project.defaultProps = {
  projectcard: this.props.project||null,
   sections: this.props.project.sections||null, 
   imagesource: this.props.project.image||null
  };
*/
export default getRouteProps(Project); 