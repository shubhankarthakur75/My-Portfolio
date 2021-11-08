import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
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
      </div>
    );
  }
}

export default Navbar;
