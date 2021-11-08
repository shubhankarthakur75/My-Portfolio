import React, { Component } from "react";
import "./Showcase.css";
import PortfolioImage from "../../assets/images/portfolio-image.png";

class Showcase extends Component {
  render() {
    return (
      <div className="showcase-container">
        <div className="showcase-text-container">
          <p id="user-name">
            <span>Hi,</span> I am {this.props.propsName}
          </p>
          <p id="user-desc">A {this.props.propsDesc}</p>
          <p id="user-tagline">{this.props.propsTagline}</p>
        </div>
        <div className="showcase-image-container">
          <img id="showcase-image" src={PortfolioImage} alt="showcase" />
        </div>
      </div>
    );
  }
}

export default Showcase;
