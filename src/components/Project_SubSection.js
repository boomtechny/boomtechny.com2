import React from 'react'
import testImg from '../assets/images/bt_typography.png'
import Project_Loadout_Card from '../components/Project_Loadout_Card'
import ImageZoom from 'react-medium-image-zoom'
class Project_SubSection extends React.Component{
  constructor(props){
    super(props); 
    this.state = {}; 
  
   
    //this._setMessage = this._setMessage.bind(this);
  
  }


  subSectionGetImage(subimages){

 

  if(subimages){
  

   const subimagemap = subimages.map(subimage=>{
    const imagesrc =  require('../assets/images/' + subimage.image); 
     return(
      
      <ImageZoom image={{ src : imagesrc, className : "subsection_image", style:{ width:'100%'}}} zoomImage={{src:imagesrc , style:{width:'100%'}}}/>
   
   )}
  ); 
    return(
      <div className = "subsection_image__wrapper">
{subimagemap}
    </div>
    
    
    );
    
    }
  }


subSectionLoadoutCard(subsectioninfo){

if(subsectioninfo){
  return(
<Project_Loadout_Card key = {this.props.subsectionid} label = {this.props.subsectiontitle} blocktext={this.props.subsectioninfoblock} />
  )

}
}
render(){
   
   
 
return(
  <div className="subsection__wrapper --revealloadout">

{this.subSectionLoadoutCard(this.props.subsectioninfoblock)}
{this.subSectionGetImage(this.props.subsectionimages)}

</div>)
}

}


export default Project_SubSection; 