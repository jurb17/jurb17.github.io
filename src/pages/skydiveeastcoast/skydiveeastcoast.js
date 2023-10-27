import React from "react";

import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Card from "../../components/card";
import Footer from "../../components/footer";
import SplitSection from "../../components/SplitSection";
import { IconBrandHipchat, IconRocket, IconMagnet } from "@tabler/icons-react";
import Links from "../../components/links";
import Navbar from "../../components/navbar/Navbar";

const SkyDiveEastCoast = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sky Dive East Coast</title>
        <meta property="og:title" content="Sky Dive East Coast" />
      </Helmet>
      <Navbar></Navbar>
      <section className="home-banner">
        <div className="home-container2">
          <div className="home-header5">
            <h2 className="home-title1">Testing the Bookeo Scheduler</h2>
            <p className="home-description6">
              This button will reroute you to the Bookeo customer scheduler
              page.
            </p>
          </div>
          <a href="https://bookeo.com/jordanwebdesign">
            <button className="button">
              <span>
                <span>Schedule Meeting</span>
                <br></br>
              </span>
            </button>
          </a>
        </div>
      </section>
      <section className="home-newsletter"></section>
      <Footer></Footer>
      <div>
        <DangerousHTML
          html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
        ></DangerousHTML>
      </div>
    </div>
  );
};

export default SkyDiveEastCoast;
