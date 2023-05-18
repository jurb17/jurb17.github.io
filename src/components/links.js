import React from "react";

import PropTypes from "prop-types";

import "./links.css";
import "../views/home.css";

const Links = (props) => {
  return (
    <nav className="home-links">
      {/* <a href="#/pricing">
        <button className="home-button button">
          <span>Pricing</span>
        </button>
      </a>
      <a href="#/portfolio">
        <button className="home-button01 button">
          <span>Portfolio</span>
        </button>
      </a> */}
      <a href="https://meetings.hubspot.com/jurbaczek">
        <button id="outlined" className="button home-button06">
          Schedule Dive!
        </button>
      </a>
    </nav>
  );
};

Links.defaultProps = {
  button: "Schedule",
  // text: "Pricing",
  // text1: "Portfolio",
};

Links.propTypes = {
  button: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};

export default Links;
