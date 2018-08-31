import React, { Component } from "react";
import Content from "../data/content.json";
import Portrait from "../images/portrait.png";

class About extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    this.setState({
      data: Content
    })
  }

  render() {
    return(
      <div className="container">
        <div className="row main-content">
          { this.state.data.description &&
            <div className="col-md-6">
              <p>{ this.state.data.description.title }</p>
              <p>{ this.state.data.description.p1 }</p>
              <p>{ this.state.data.description.p2 }</p>
            </div>
          }
          <div className="col-md-6">
          </div>
        </div>
        <div className="row main-content">
          <div className="col-md-6">
            <img src={ Portrait } alt="portrait"/>
          </div>
          { this.state.data.about &&
            <div className="col-md-6">
              <h2>{ this.state.data.about.title }</h2>
              <p>{ this.state.data.about.p1 }</p>
              <p>{ this.state.data.about.p2 }</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default About;
