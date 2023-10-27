import React from "react";

import PropTypes from "prop-types";

const SplitSection = (props) => {
  let filename = "/playground_assets/" + props.filename;

  return (
    <>
      <section className="home-services">
        <div className="home-content1">
          <div className="home-details">
            <div className="home-header">
              <h2 className="home-text12">{props.title}</h2>
              <div className="home-description1">
                <p className="home-text13">{props.paragraph1}</p>
                <p className="home-text14">
                  {props.paragraph2}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </p>
              </div>
            </div>
            {!!props.buttontext && (
              <button className="button">
                <span className="home-text15">
                  <span>{props.buttontext}</span>
                  <br></br>
                </span>
              </button>
            )}
          </div>
          <div className="home-image04">
            <img alt="image" src={filename} className="home-image05" />
          </div>
        </div>
      </section>
    </>
  );
};

SplitSection.defaultProps = {
  text: "Jordan Web Design",
  text1: "Jordan Web Design",
};

SplitSection.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};

export default SplitSection;
