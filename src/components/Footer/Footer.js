import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p className="footer-text">
          &copy; 2021 {this.props.propsName}. All rights reserved.
        </p>
      </div>
    );
  }
}

export default Footer;
