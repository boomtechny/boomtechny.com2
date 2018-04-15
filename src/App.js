import React from 'react'
import { Router, Link, Route, Component} from 'react-static'
import Routes from 'react-static-routes'
import ReactDOM from 'react-dom'
import style from './stylesheets/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'


class App extends React.Component{
   // const routelocation = this.state.routelocation;
   // const history;
   render(){
    return(
    
      <Router>
    
         <div className="page__container">  
         <Header />  
         <div className="content">
         
                <Routes/>

           </div>
  
        <Contact/>
      <Footer/>

      </div>
      
    </Router>
    )
    
  }
}

export default App; 


