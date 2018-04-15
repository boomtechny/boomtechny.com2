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
import Decorator_More_Right from '../assets/images/more_right.svg'
import Decorator_More_Left from '../assets/images/more_left.svg'
import Decorator_Detail from '../assets/images/decorator_detailarrow.svg'
import Profile_Loadout_Card_Additional from '../components/Profile_Loadout_Card_Text_Additional'
  
class Profile_Summary extends React.Component{
    constructor(){
      super(); 
      this.state = {
        hudReveal:false,
        currentBoundingClient:0, 
        loadoutReveal:false, 
        textReveal:false
     
      }
      this.handleScroll = this.handleScroll.bind(this);
  
      
    }

    componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
      const checksection = this.checkSection;
      
      let currentBoundingClient = checksection.getBoundingClientRect().top;
      
      this.setState({currentBoundingClient}); 
 
   
      }

    componentDidUpdate(){
      let clientRectTop = this.state.currentBoundingClient;
     
    if(clientRectTop <= window.innerHeight * 0.75){
      this.setState({hudReveal:true, loadoutReveal:true, textReveal:true});
      }
      
      /*const loadoutWrapper = this.loadoutWrapper;
      loadoutWrapper.setAttribute("style", "animation-delay:");*/
      }

    shouldComponentUpdate(nextProps, nextState){
      return(
        this.state.currentBoundingClient !== nextState.currentBoundingClient  ||
        this.state.hudReveal !== nextState.hudReveal ||
        this.state.textReveal !== nextState.textReveal ||
        this.state.loadoutReveal !== nextState.loadoutReveal
      )
          }
    componentWillUnmount(){
      window.removeEventListener('scroll',this.handleScroll); 
      
    }
    handleScroll(e){
      e.preventDefault();
      const checksection = this.checkSection;
     
  if(checksection.getBoundingClientRect().top <= window.innerHeight * 0.75 && checksection.getBoundingClientRect().top > 0){
    //console.log('showing');   
    this.setState({hudReveal:true, loadoutReveal:true, textReveal:true});
  

  }}

  createLoadoutCards(profile){
    //change to map only the first 3 projects 
  //console.log(animState);
 let loadoutsize = 2; 
  const children = (details) => 
  
  {if(details){
  return (details.map(detail=>
  <div className="details" key={detail.id}><Profile_Loadout_Card_Text text={detail.detailTitle}/><Profile_Loadout_Card_Additional text={detail.detailAddtl}/> </div>))}
  }
    
  return (profile.loadouts.slice(0, loadoutsize).map((loadout)=>
   <Profile_Loadout_Card key = {loadout.loadoutid} label = {loadout.categoryTitle} > {children(loadout.details)} </Profile_Loadout_Card>));
 
    
  }

    render(){
      let isInView = this.state.loadoutReveal;
      
      let newClass = isInView ? '--revealloadout' : '--hiddenloadout';

 const profile = this.props.profile;


      return(<section ref={(node) => {this.checkSection = node} } className = "section_container profile_summary">
      
        <Section_Title title="Profile"  pageclassname=""/> 

        <div className = "section_container__content">
        <Section_Background reveal={this.state.hudReveal} backgroundpagename = {""}/>
        <Section_Pattern reveal={this.state.hudReveal} source="pattern.svg" patternpagename = {""}/>
        <Section_Content_Wrapper pagename={" profile_summary"}>
        <div className={`profile_wrapper ` + newClass} ref={(node) =>{this.loadoutWrapper = node}} >
        <div className = "profile__row1">
        <div className="profile_wrapper__image">
       <Profile_Image/>
        </div>

        <div className="profile_wrapper__detailtext">
        <Profile_DetailText label = "Name:" detail={this.props.profile.name} reveal={this.state.textReveal}/>
        <Profile_DetailText label = "Identity:" detail = {this.props.profile.identity} reveal={this.state.textReveal} />
        <Profile_DetailText label = "Location:" detail ={this.props.profile.location} reveal={this.state.textReveal}/>
        <Profile_DetailText label = "Status:" detail = {this.props.profile.status} reveal={this.state.textReveal}/>
    <Profile_DetailText customclass = {' resume__detail'} label = "Resume:" reveal={this.state.textReveal} detail ={<a href={Resume} className ="resume__link"><div className="cta-button resume" >Download CV</div></a>}/>

        </div>
</div>
<div className ="profile__row2">
        <div className="profile_wrapper__loadoutcard profile_cards">
        {this.createLoadoutCards(profile)}
        <div className="section_container__footer">
        <object className="decorator_left" data={Decorator_More_Left}/>
        <Link to="/profile" className= "cta-button">LEARN MORE</Link>
        <object className="decorator_right" data={Decorator_More_Right}/>
        </div>
       </div>
       </div>
        </div>


        
        </Section_Content_Wrapper>
        </div>

       
      
        </section>
        )
    }
  }
  export default getRouteProps(Profile_Summary);

