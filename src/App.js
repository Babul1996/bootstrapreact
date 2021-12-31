import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Service from './Service'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
    

    <Router>
    <Navbar/>
    <Switch>
    <Route exact path ="/" component={Home}/>
    
    <Route exact path="/about" component={About}/>
   
    <Route exact path="/service" component={Service}/>
    
    <Route exact path="/gallery" component={Gallery}/>
 
    <Route exact path="/contact" component={Contact}/>
    
    </Switch>
    
    <Footer/>
    </Router>
    </>
  )
}

export default App
