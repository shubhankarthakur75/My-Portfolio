import React, { Component } from "react";
import "./HamburgerMenu.css";
import cancelIcon from "../../assets/images/cancel-icon-32px.png";

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="hamburger-menu-container">
        <li>
          <button
            onClick={this.props.propsHandleHamburgerMenuFn}
            id="cancel-btn"
          >
            <img src={cancelIcon} id="cancel-icon" alt="cancel-icon" />
          </button>
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </div>
    );
  }
}

export default HamburgerMenu;
