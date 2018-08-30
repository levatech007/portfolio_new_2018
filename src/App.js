import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";

class App extends Component {
  constructor() {
  super();
  this.state = {
    height: 0,
  }
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      height: window.innerHeight
    })
  }

  render() {
    console.log(this.state.height)
    return (
      <div className="container-fluid">
          <Header />
          {this.state.height && <Hero  windowHeight={ this.state.height }/> }
          <MainContent />
          <Footer />
      </div>
    )
  }
}

export default App;
