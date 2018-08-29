import React, { Component } from "react";
import MenuSelection from "./MenuSelection.js";

class PopupMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return(
      <div>
        <div className={this.state.open ? "popup-menu open" : "popup-menu"} onClick={ this.openMenu }>
          <div className="bar1" key="b1" />
          <div className="bar2" key="b2" />
          <div className="bar3" key="b3" />
        </div>
        { this.state.open? <MenuSelection /> : null }
      </div>
    )
  }
}

export default PopupMenu;
