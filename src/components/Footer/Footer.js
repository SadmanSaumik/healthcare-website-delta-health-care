import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container footer-wrapper">
        <div className="row">
          <div className="col-md-6 col-12 col-sm-12">
            <h6> Copyright © Delta Health Care Limited</h6>
          </div>
          <div className="col-md-6 col-sm-12 col-12 social-wrapper">
            <FontAwesomeIcon
              className="social"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="social"
              icon={faTwitter}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="social"
              icon={faInstagram}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="social"
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
