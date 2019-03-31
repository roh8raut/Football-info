import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Players from './Container/Players/Players';
import NavigationBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './Components/AboutMe/About';




class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      <NavigationBar/>
      {/* <Route path="/" components={{navbar: NavigationBar, banner: Banner, players: Players, footer: Footer}} /> */}
      <Route exact path="/" component={Banner} />
      <Route exact path="/" component={Players} /> 
      <Route path="/about" component={About} />
      <Footer />


      </div>
    </Router>
    );
  }
}

export default App;