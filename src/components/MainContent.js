import React, { Component } from "react";
import About from "./About.js";
import Contact from "./Contact.js";

class MainContent extends Component {
  render() {
    return(
      <div>
          <ul className="nav justify-content-center">
            <li className="nav-item nav-link">About</li>
            <li className="nav-item nav-link">Technologies</li>
            <li className="nav-item nav-link">About me</li>
          </ul>
      <About />
      <Contact />
    </div>
    )
  }
}

export default MainContent;
