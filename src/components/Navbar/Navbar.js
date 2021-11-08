import React, { Component } from "react";
import HamburgerMenuIcon from "../../assets/images/hamburger-menu-32px.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu.js";

class Navbar extends Component {
  state = {
    isHamburgerMenuVisible: false,
  };

  handleHamburgerMenu = () => {
    this.setState(
      {
        isHamburgerMenuVisible: !this.state.isHamburgerMenuVisible,
      },
      () => console.log(this.state.isHamburgerMenuVisible)
    );
  };

  render() {
    return (
      <div className="navbar">
        <div className="nav-name">{this.props.propsName}</div>
        <div className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </div>
        <div className="hamburger-menu">
          <img
            src={HamburgerMenuIcon}
            id="hamburger-menu-icon"
            alt="Hamburger-menu-icon"
            onClick={this.handleHamburgerMenu}
          />
        </div>
        {this.state.isHamburgerMenuVisible === true ? (
          <HamburgerMenu
            propsHandleHamburgerMenuFn={this.handleHamburgerMenu}
          />
        ) : (
          this.state.isHamburgerMenuVisible === false
        )}
      </div>
    );
  }
}

export default Navbar;
