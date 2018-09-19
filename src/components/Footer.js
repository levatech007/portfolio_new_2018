import React, { Component } from "react";
import Github from "../images/icon-github.svg";
import Linkedin from "../images/icon-linkedin.svg";
import Email from "../images/icon-email.svg";

class Footer extends Component {
  render() {
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="row justify-content-center">
              <div className="col-md-2"><img src={ Github } alt="github" /></div>
              <div className="col-md-2"><img src={ Linkedin } alt="linkedin" /></div>
              <div className="col-md-2"><img src={ Email } alt="email" /></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <p className="small">&copy; 2018 Eva-Liisa Galen</p>
        </div>
      </div>
    )
  }
}

export default Footer;
