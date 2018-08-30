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
      data: Content.about
    })
  }

  render() {
    return(
      <div className="container main-content">
        <div className="row">
          <div className="col-md-6">
            <img src={ Portrait } />
          </div>
          <div className="col-md-6">
            <h2>{ this.state.data.title }</h2>
            <p>{ this.state.data.p1 }</p>
            <p>{ this.state.data.p2 }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
