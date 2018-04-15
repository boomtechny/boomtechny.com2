Profile
-----
{
  "profile": 
  {
    "id": 1,
    "name": "Kelly Martinez",
    "affiliation": "BoomTech", 
    "location": "New York",
    "status": "Available for Work",
    "loadout:[{
      "skills": [{
        "id": 1,
        "title": "Front End Development",
        "additional":"HTML, CSS, JS"},
        {
        "id": 2, 
        "title":"Back End Development", 
        "additional":"PHP" 
      }],
      "Overview":[{
        "id":1,
        "title": "Background", 
        "additional":"
A developer and designer from an engineering background with an explosive passion for the ever growing field of technology. Operating under the affiliation BoomTech allows me to be able to take on a variety of projects to further advance my skill set and experience without limitation."},
        "id":2,
        "title": Objective", 
        "additonal":"To continue" 
      }]
    }]
  
}

Reconfigure json data so that the skills data and other loadout card is in a another tree 



Setup a loadout card for each under loadout 

  <div className="profile_wrapper__loadoutcard profile_cards">
        <Profile_Loadout_Card label = "Skills">
{profile.skills.map(skill =>(<div className="details" key={skill.id}><Profile_Loadout_Card_Text text={skill.title}/>
<Profile_Loadout_Card_Additional text={skill.additional}/></div> ))}
        

          </Profile_Loadout_Card>



    createLoadoutCardDetails(key){
      return (<div>my key</div>); 
      //console.log(key);

    }

Name 
Affiliation 
Location 
Status 
Download CV 

Workflow 


Paradigms 
Methods/ 
OOP 
Functional Programming 
Immutability 

Agile Workflow 
SCRUM 
XP 



Style Practices 


Project Data 
----

{
  "projects": [

  {
    "id": 1,
    "title": "BoomTech",
    "services": [
      "BRAND IDENTITY", 
      "WEB DEVELOPMENT", 
      "GRAPHIC DESIGN"
    ], 
    "brand": "logo_bt.svg"
  },
  {
    "id": 2,
    "title": "Beast1x5",
    "services":[
      "BRAND IDENTITY", 
      "WEB DEVELOPMENT", 
      "GRAPHIC DESIGN"
    ],
    "brand": "logo_beast1x5.svg"
  }, 
  {
    "id": 3,
    "title": "Ecommerce",
    "services":[
      "BRAND IDENTITY", 
      "WEB DEVELOPMENT", 
      "GRAPHIC DESIGN"
    ],
    "brand": "logo_beast1x5.svg"
  }, 
  {
    "id": 4,
    "title": "Beast1x5",
    "services":[
      "BRAND IDENTITY", 
      "WEB DEVELOPMENT", 
      "GRAPHIC DESIGN"
    ],
    "brand": "logo_beast1x5.svg"
  }, 
  {
    "id": 5,
    "title": "Beast1x5",
    "services":[
      "BRAND IDENTITY", 
      "WEB DEVELOPMENT", 
      "GRAPHIC DESIGN"
    ],
    "brand": "logo_beast1x5.svg"
  }, 
  {
    "id": 6,
    "title": "Beast1x5",
    "services":[
      "BRAND IDENTITY", 
      "WEB DEVELOPMENT", 
      "GRAPHIC DESIGN"
    ],
    "brand": "logo_beast1x5.svg"
  }


  ]
}

https://codepen.io/mochiron/pen/jrymLG