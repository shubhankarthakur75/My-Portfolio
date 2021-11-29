import React, { Component } from "react";
import "./MyPortfolio.css";
import ToDoWebImage from "../../assets/images/to-do-web-image.png";
import ToDoMobileImage from "../../assets/images/to-do-mobile-image.png";
import DigitalClock from "../../assets/images/digital-clock-image.png";
import myPortfolioImage from "../../assets/images/my-portfolio-image.png";
import reactBlogApp from "../../assets/images/react-blog-app-image.png";
// import backtrackingImage from "../../assets/images/backtracking-image.png";

class MyPortfolio extends Component {
  render() {
    return (
      <div className="my-portfolio-container" id="portfolio">
        <h2 className="my-portfolio-title">My Portfolio</h2>
        <div className="project-image-container">
          <div>
            <a
              href="https://shubhankarthakur75.github.io/React-Blog-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="react-blog-app-image"
                className="project-image"
                src={reactBlogApp}
                alt="React-Blog-App"
              />
            </a>
          </div>
          <div>
            <a
              href="https://shubhankarthakur75.github.io/To-Do-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="to-do-web-image"
                className="project-image"
                src={ToDoWebImage}
                alt="To-Do-Web"
              />
            </a>
          </div>

          <div>
            <a
              href="https://shubhankarthakur75.github.io/My-Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="my-portfolio-image"
                className="project-image"
                src={myPortfolioImage}
                alt="my-portfolio"
              />
            </a>
          </div>

          <div>
            <a
              href="https://shubhankarthakur75.github.io/To-Do-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="to-do-mobile-image"
                className="project-image"
                src={ToDoMobileImage}
                alt="To-Do-Mobile"
              />
            </a>
          </div>

          <div>
            <a
              href="https://shubhankarthakur75.github.io/Digital-Clock/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="digital-clock"
                className="project-image"
                src={DigitalClock}
                alt="Digital-Clock"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPortfolio;
