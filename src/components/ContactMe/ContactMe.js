import React, { Component } from "react";
import "./ContactMe.css";
import EmailIcon from "../../assets/images/email-32px.png";
import CallIcon from "../../assets/images/phone-call-32px.png";
import LocationIcon from "../../assets/images/location-32px.png";
import ContactUs from "../../assets/images/contact-us.jpg";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact-me-container" id="contact">
        <h2 className="contact-me-title">Contact Me</h2>
        <div className="contact-me-boxes">
          <div className="contact-me-left-box">
            <h3 className="contact-me-left-box-heading">Let's connect</h3>
            <p className="contact-me-left-box-text"></p>
            <div className="contact-details-container">
              <li>
                <span>
                  <img src={EmailIcon} alt="call-icon" />
                </span>
                <span id="email-id" className="contact-details-lines">
                  {this.props.propsEmail}
                </span>
              </li>
              <li>
                <span>
                  <img src={CallIcon} alt="call-icon" />
                </span>
                <span id="contact-no" className="contact-details-lines">
                  {this.props.propsContactNo}
                </span>
              </li>
              <li>
                <span>
                  <img src={LocationIcon} alt="location-icon" />
                </span>
                <span id="address" className="contact-details-lines">
                  {this.props.propsAddress}
                </span>
              </li>
            </div>
          </div>
          <div className="contact-me-right-box">
            <img
              src={ContactUs}
              id="contact-us-image"
              alt="man-receiving-message"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
