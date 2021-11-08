import React, { Component } from "react";
import "./MyResume.css";

class MyResume extends Component {
  render() {
    return (
      <div className="my-resume-container" id="resume">
        <h2 className="my-resume-title">Resume</h2>
        <div className="resume-and-image-container">
          <div className="resume-left-box">
            <div className="resume-education">
              <h2 className="resume-education-title">Education</h2>
              <div className="education-list">
                <p id="education-university">
                  {this.props.propsGraduationUniversity}
                </p>
                <p id="education-degree">{this.props.propsGraduationDegree}</p>
                <p className="education-score">
                  Percentage:{this.props.propsGraduationPercentage}
                </p>
                <p className="education-score">
                  CGPA:{this.props.propsGraduationCGPA}
                </p>
              </div>
            </div>
            <div className="resume-technical-skills">
              <h2 className="resume-technical-skill-title">Technical skills</h2>
              <div className="technical-skills-list">
                {this.props.propsTechnicalSkills.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </div>
            </div>
            <div className="resume-button">
              <button id="resume-btn"> Get Resume</button>
            </div>
          </div>
          <div className="resume-right-box">
            <div className="resume-projects-container">
              <h2 className="resume-projects-title">Projects</h2>
              <div className="projects-list">
                {this.props.propsProjects.map((projectItem, index) => {
                  return (
                    <div className="resume-project" key={index}>
                      <li>
                        <a
                          href={projectItem.hostURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h2 className="resume-project-name">
                            {projectItem.projectName}
                          </h2>
                        </a>

                        <p className="technology-used">
                          ({projectItem.projectTechnology.toString()})
                        </p>

                        <p className="resume-project-desc">
                          {projectItem.projectDesc}
                        </p>

                        <div>
                          <span>
                            <a
                              href={projectItem.hostURL}
                              target="_blank"
                              rel="noreferrer"
                              className="host-url github-links"
                            >
                              <button className="github-links-btn">
                                Host URL
                              </button>
                            </a>
                          </span>
                          <span>
                            <a
                              href={projectItem.repoURL}
                              target="_blank"
                              rel="noreferrer"
                              className="repo-url github-links"
                            >
                              <button className="github-links-btn">
                                Repo URL
                              </button>
                            </a>
                          </span>
                        </div>
                        {/* <a
                          href={projectItem.repoURL}
                          target="_blank"
                          rel="noreferrer"
                          className="repository-link"
                        >
                          <p className="repository-link-text">
                            Repository Link
                          </p>
                        </a> */}
                      </li>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyResume;
