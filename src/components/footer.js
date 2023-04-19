import React from "react";

import PropTypes from "prop-types";

import Branding from "./branding";
import "./footer.css";

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-information">
        <div className="footer-content">
          <div className="footer-header">
            <Branding></Branding>
            <p className="footer-disclaimer">{props.disclaimer}</p>
          </div>
          <div className="footer-contact-list">
            <div className="footer-contact">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="footer-image"
              />
              <span className="footer-text01">{props.email}</span>
            </div>
            <div className="footer-contact1">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="footer-image1"
              />
              <span className="footer-text02">{props.text2}</span>
            </div>
          </div>
        </div>
        <span className="footer-copyright">{props.Copyright}</span>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <span className="link">{props.firstCol1}</span>
          <span className="link">{props.firstCol2}</span>
          <span className="link">{props.firstCol3}</span>
          <span className="link">{props.firstCol4}</span>
          <span className="link">{props.firstCol5}</span>
          <span className="link">{props.firstCol6}</span>
        </div>
        <div className="footer-column1">
          <a href="#/pricing">
            <span className="link">{props.secondCol1}</span>
          </a>
          <a href="#/portfolio">
            <span className="link">{props.secondCol2}</span>
          </a>
          <a href="mailto:jordan@jordanwebdesign.com" target={"_blank"}>
            <span className="link">{props.secondCol3}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jordan-urbaczek/"
            target={"_blank"}
          >
            <span className="link">{props.secondCol4}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  secondCol2: "Portfolio",
  secondCol4: "LinkedIn",
  secondCol1: "Pricing\n",
  // Copyright: "©2022 Product Calgary. All Rights Reserved.",
  image_alt: "image",
  // firstCol1: "About",
  // disclaimer:
  //   "The owner of this website disclaims responsibility for any harm relating to the use",
  image_src: "/playground_assets/group%201639.svg",
  // firstCol4: "Membership",
  email: "jordan@jordanwebdesign.com",
  // secondCol3: "Twitter",
  // firstCol5: "Blog",
  secondCol3: "Contact",
  // firstCol3: "Events",
  text2: "+1 732-642-7945",
  image_alt1: "image",
  image_src1: "/playground_assets/group%201640.svg",
  // secondCol2: "Instagram",
};

Footer.propTypes = {
  firstCol6: PropTypes.string,
  secondCol4: PropTypes.string,
  firstCol2: PropTypes.string,
  Copyright: PropTypes.string,
  image_alt: PropTypes.string,
  firstCol1: PropTypes.string,
  disclaimer: PropTypes.string,
  image_src: PropTypes.string,
  firstCol4: PropTypes.string,
  email: PropTypes.string,
  secondCol3: PropTypes.string,
  firstCol5: PropTypes.string,
  secondCol1: PropTypes.string,
  firstCol3: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  secondCol2: PropTypes.string,
};

export default Footer;
