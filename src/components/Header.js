import React, { Component } from "react";
import PopupMenu from "./PopupMenu.js";

class Header extends Component {
  render() {
    return(
      <div className="d-flex flex-row-reverse bd-highlight">
        <PopupMenu />
      </div>
    )
  }
}

export default Header;
