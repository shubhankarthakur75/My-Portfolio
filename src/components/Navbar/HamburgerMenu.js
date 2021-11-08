import React, { Component } from "react";
import "./HamburgerMenu.css";
import { HashLink as Link } from "react-router-hash-link";
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
        <li className="nav-link">
          <Link
            smooth
            to="#home"
            onClick={this.props.propsHandleHamburgerMenuFn}
          >
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link
            smooth
            to="#about-me"
            onClick={this.props.propsHandleHamburgerMenuFn}
          >
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link
            smooth
            to="#portfolio"
            onClick={this.props.propsHandleHamburgerMenuFn}
          >
            Portfolio
          </Link>
        </li>

        <li className="nav-link">
          <Link
            smooth
            to="#resume"
            onClick={this.props.propsHandleHamburgerMenuFn}
          >
            Resume
          </Link>
        </li>
        <li className="nav-link">
          <Link
            smooth
            to="#contact"
            onClick={this.props.propsHandleHamburgerMenuFn}
          >
            Contact
          </Link>
        </li>
      </div>
    );
  }
}

export default HamburgerMenu;
