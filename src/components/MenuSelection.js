import React, { Component } from "react";

class MenuSelection extends Component {
  constructor() {
    super();
    this.state = {
      closed: true,
      menuItems: ["About", "Work", "Contact"],
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
          {
            this.state.menuItems.map((item, idx) => {
              return(
                <li onClick={ this.onMenuClick } key={ idx }>{ item }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default MenuSelection;
