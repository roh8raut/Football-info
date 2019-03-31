import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Players from './Container/Players/Players';
import NavigationBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Banner />
        <Players />
        <Footer />
      </div>
    );
  }
}

export default App;