import React, { Component } from "react";
import "./MyPortfolio.css";
import ToDoWebImage from "../../assets/images/to-do-web-image.png";
import ToDoMobileImage from "../../assets/images/to-do-mobile-image.png";
import DigitalClock from "../../assets/images/digital-clock-image.png";

class MyPortfolio extends Component {
  render() {
    return (
      <div className="my-portfolio-container">
        <h2 className="my-portfolio-title">My Portfolio</h2>
        <div className="project-image-container">
          <div>
            <img
              id="to-do-web-image"
              className="project-image"
              src={ToDoWebImage}
              alt="To-Do-Web"
            />
          </div>

          <div>
            <img
              id="to-do-mobile-image"
              className="project-image"
              src={ToDoMobileImage}
              alt="To-Do-Mobile"
            />
          </div>

          <div>
            <img
              id="digital-clock"
              className="project-image"
              src={DigitalClock}
              alt="Digital-Clock"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyPortfolio;
