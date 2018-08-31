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
        background: "none",
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
        background: "none",
      }
    })
  }



  render() {
    return(
       <div className="container main-content">
        <div className="jumbotron" id="heroText" style={ this.state.style }>
            <h1 className="display-1" id="name">Eva-Liisa Galen</h1>
            {/* <div className="pattern-line"></div> */}
            <hr></hr>
            <p className="display-4">Web Developer</p>
        </div>
      </div>
    )
  }
}

export default Hero;
