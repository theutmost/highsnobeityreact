import React, { Component } from 'react';
import './App.css';
import TopCarousel from './TopCarousel.jsx';
import NavBar from './NavBar.jsx';
import MainContainer from './MainContainer.jsx';
import ColorsContainer from './ColorsContainer.jsx';
import Footer from './Footer.jsx';


class App extends Component {
  render() {
    return [

      <div>

        <TopCarousel />
        <NavBar />
        <MainContainer />
        <ColorsContainer />
        <Footer />

      </div>

        ]
  }
}

export default App;
