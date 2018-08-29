import React, { Component } from "react";

class MenuSelection extends Component {
  constructor() {
    super();
    this.state = {
      closed: true,
    }
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick() {
    console.log("Clicked!")
  }

  render() {
    return(
      <div className="menu-selection">
        <ul>
          <li onClick={ this.onMenuClick }>About</li>
          <li onClick={ this.onMenuClick }>Work</li>
          <li onClick={ this.onMenuClick }>Contact</li>
        </ul>
      </div>
    )
  }
}

export default MenuSelection;
