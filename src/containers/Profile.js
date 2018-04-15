/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
import Section_Title from '../components/Section_Title'
import Section_Pattern from '../components/Section_Pattern'
import Section_Content_Wrapper from '../components/Section_Content_Wrapper'
import Section_Background from '../components/Section_Background'
import Decorator_More from '../assets/images/decorator_learnmore.svg'
import Resume from '../assets/docs/KELLY_MARTINEZ_RESUME.pdf'
import Profile_DetailText from '../components/Profile_DetailText'
import Profile_Loadout_Card from '../components/Profile_Loadout_Card'
import Profile_Image from '../components/Profile_Image'
import Profile_Loadout_Card_Text from '../components/Profile_Loadout_Card_Text'

import Decorator_Detail from '../assets/images/decorator_detailarrow.svg'
import Profile_Loadout_Card_Additional from '../components/Profile_Loadout_Card_Text_Additional'
  class Profile extends React.Component{
    constructor(props){
      super(props); 
      this.state = {  hudReveal:true,
        loadoutReveal:true, 
        textReveal:true}; 
     
      //this._setMessage = this._setMessage.bind(this); 
    }
    

    createLoadoutCards(profile){
      //change to map only the first 3 projects 
    //console.log(animState);
    let loadoutstart = 2; 
    const children = (details) => 
    
    {if(details){
    return (details.map(detail=>
    <div className="details" key={detail.id}><Profile_Loadout_Card_Text text={detail.detailTitle}/><Profile_Loadout_Card_Additional text={detail.detailAddtl}/> </div>))}
    }
      
    return (profile.loadouts.slice(loadoutstart).map((loadout)=>
     <Profile_Loadout_Card key = {loadout.loadoutid} label = {loadout.categoryTitle} > {children(loadout.details)} </Profile_Loadout_Card>));
   
      
    }

/*
    createLoadoutCardDetails(key){
      return (<div className={key}>{key}</div>); 
      //console.log(key);

    }

    */
    render(){
   const profile = this.props.profile;
  return(<section className = "section_container profile">
      
        <Section_Title title="Profile" pageclassname=" profile__title"/> 
   <div className = "section_container__content profile__content">
        <Section_Background reveal={this.state.hudReveal} backgroundpagename={" profile__background"}/>
        <Section_Pattern reveal={this.state.hudReveal} source="pattern.svg" patternpagename = {" profile__pattern"}/>
        <Section_Content_Wrapper pagename={" profile_content__wrapper"}>
        <div className="profile_wrapper --revealloadout">
<div className = "profile__row1">
       <div className="profile_wrapper__image">
       <Profile_Image/>
        </div>
        <div className="profile_wrapper__detailtext">
        <Profile_DetailText label = "Name:" detail={profile.name} reveal={this.state.textReveal}/>
        <Profile_DetailText label = "Identity:" detail = {profile.identity} reveal={this.state.textReveal}/>
        <Profile_DetailText label = "Location:" detail ={profile.location} reveal={this.state.textReveal}/>
        <Profile_DetailText label = "Status:" detail = {profile.status} reveal={this.state.textReveal}/>
        <Profile_DetailText customclass = {' resume__detail'} label = "Resume:" reveal={this.state.textReveal} detail ={<a href={Resume} className ="resume__link"><div className="cta-button resume" >Download CV</div></a>}/>
        </div>
        </div>
        <div className ="profile__row2">
    <div className="profile_wrapper__loadoutcard profile_cards">
        {this.createLoadoutCards(profile)}

       </div>
       </div>
        
        </div>


        
        </Section_Content_Wrapper>
        </div>

       
        
        </section>
        )
    }
  }
  export default getRouteProps(Profile);



/*
export default () => (
<section className = "profile"> 
<header className = "profile-section">
<h2>Profile</h2>
</header>
<div className = "profile-intro">
  <img src= {profileImg} alt = "Profile Image"></img>
  <h3>Kelly Martinez</h3>
  <p>Idenity:Creative Developer and Designer with a degree in Electrical and Computer Engineering Technology</p>
  <p>Alias:Operating under the name of BoomTech based in NY. </p>
  <p>Objectives: To continue to gain experience in the technology field. My ambition is to be able to one day form a team to design, develop, and implement network integrated devices</p>
  <p>Hobbies: Working on Personal Projects, Hiking, Cooking, Watching Films, Reading Comics, Debating over films and comics, Video Gaming, Warhammer: Currently build a Tau Army.  </p>

 </div>
<div className = "profile-skills">
<h3>Skills/ Experience/ Loadout</h3>
  <h5>Front End Development,</h5>
  
  <p>HTML5, CSS, Javascript</p>
  <p>Style: BEM methodologies, </p>
  <p>Module CSS, CSS Variables, Sass</p>
  <p>CSS Frameworks: Bootstrap, Foundation</p>
  <p>JSX, React, </p> 
  <p>PHP</p>
  <p>Laravel</p>
  <p>CMS: Wordpress, Drupal</p>
  <p>Testing: PHPUnit Testing</p>
  <p>Caching</p>
  <p>CDN</p> 
  <p>Ruby on Rails</p>
  <p>Testing: FactoryBot</p>
  <p>Node JS</p>
   <h3>Design</h3>
  <p>Brand Identity, Print Ready Designs, </p>
  <p>Illustrator, Photoshop, After Effects, InDesign, ExperienceXD, </p>
  <p>Print ready designs</p> 
  <h4>User Research</h4>
  <h4>PCB Design</h4>

</div>
<div className = "profile-tools">
  <p>Other Useful Tools:</p>
    <h4>Versioning</h4>
    <p>Github, Bitbucket</p>
    <h4>Docker</h4>
    <h4>Continuous Integration and Development</h4>
    
    <h4>Collaboration</h4> 
    <p>Invision, Trello, Dropbox, </p>
</div>
<div className = "profile-workflow">
  
  <p>I like to practice an Agile methodology</p>
  <p>The first meeting will consist of understanding the scope of the project and goals this will follow with conducting initial research and delivery of proposal</p>
  <p>Proposal will include and agreement of expectations for the project and timeline for deliverables</p>
  <p>I do believe in delivering iterations</p>
  <p>I like to </p>
</div>


</section>
)
*/