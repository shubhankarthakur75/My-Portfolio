import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import HamburgerMenuIcon from "../../assets/images/hamburger-menu-32px.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu.js";

class Navbar extends Component {
  state = {
    isHamburgerMenuVisible: false,
  };

  handleHamburgerMenu = () => {
    this.setState({
      isHamburgerMenuVisible: !this.state.isHamburgerMenuVisible,
    });
  };

  render() {
    return (
      <div className="navbar">
        <div className="nav-name">{this.props.propsName}</div>
        <div className="nav-items">
          <li className="nav-link">
            <Link smooth to="#home">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link smooth to="#about-me">
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link smooth to="#portfolio">
              Portfolio
            </Link>
          </li>

          <li className="nav-link">
            <Link smooth to="#resume">
              Resume
            </Link>
          </li>
          <li className="nav-link">
            <Link smooth to="#contact">
              Contact
            </Link>
          </li>
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
