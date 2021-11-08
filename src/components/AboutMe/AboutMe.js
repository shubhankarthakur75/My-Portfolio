import React, { Component } from "react";
import "./AboutMe.css";
import HTML5logo from "../../assets/images/HTML5-logo.ico";
import CSS3logo from "../../assets/images/CSS3-logo.ico";
import JavascriptLogo from "../../assets/images/Javascript-logo.png";
import ReactJsLogo from "../../assets/images/ReactJs-logo.ico";
import GithubLogo from "../../assets/images/Github-logo.ico";
import WebDeveloper from "../../assets/images/web-developer.jpg";
class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-container" id="about-me">
        <div className="about-me-image-container">
          <img src={WebDeveloper} id="about-me-image" alt="web-developer" />
        </div>
        <div className="about-me-title-text-container">
          <h2 className="about-me-title">About Me</h2>
          <div className="about-me-text">{this.props.propsAboutMe}</div>
          <div className="technolgy-icon-container">
            <p>Languages/Library/Technology</p>
            <img src={HTML5logo} alt="HTML5" className="technology-icon" />
            <img src={CSS3logo} alt="CSS3" className="technology-icon" />
            <img
              src={JavascriptLogo}
              alt="JavascriptLogo"
              className="technology-icon"
            />
            <img
              src={ReactJsLogo}
              alt="ReactJsLogo"
              className="technology-icon"
            />
            <img
              src={GithubLogo}
              alt="GithubLogo"
              className="technology-icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
