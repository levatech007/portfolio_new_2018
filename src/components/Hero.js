import React, { Component } from "react";

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      windowHeight: 0,
      contentHeight: 0,
      style: {
        margin: "",
        textAlign: "center",
      }
    }
  }

  componentDidMount() {
    const windowHeight = this.props.windowHeight
    const contentHeight = document.getElementById("heroText").clientHeight;
    const diff = windowHeight - contentHeight
    const margin = diff / 2
    this.setState({
      windowHeight: windowHeight,
      contentHeight: contentHeight,
      style: {
        margin: margin + "px 0px",
        textAlign: "center",
      }
    })
  }

  render() {
    return(
        <div className="jumbotron jumbotron-fluid" id="heroText" style={ this.state.style }>
          <div className="container">
            <h1 className="display-1">Eva-Liisa Galen</h1>
            <hr></hr>
            <p className="display-4">Web Developer</p>
          </div>
        </div>
    )
  }
}

export default Hero;
