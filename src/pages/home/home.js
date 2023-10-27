import React from "react";
import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Card from "../../components/card";
import Footer from "../../components/footer";
import styles from "./home.module.css";
import "../archive/home.css";
import SplitSection from "../../components/SplitSection";
import { IconBrandHipchat, IconRocket, IconMagnet } from "@tabler/icons-react";
import Links from "../../components/links";
import Navbar from "../../components/navbar/Navbar";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Jordan Web Design</title>
        <meta property="og:title" content="Jordan Web Design" />
      </Helmet>
      <Navbar></Navbar>
      <header className="home-hero">
        <div className="home-content">
          <h1 className="home-title">Get confident about your website.</h1>
          <span className="home-description">
            Don't continue to put off creating or updating your website. Send me
            an email to get the ball rolling today.
          </span>
          <a href="mailto:jordan@jordanwebdesign.com">
            <button className="button home-button06">
              <span className="home-text09">Email Jordan</span>
            </button>
          </a>
          <img
            alt="image"
            src="/playground_assets/line-300w.png"
            className="home-image"
          />
        </div>
        <div className="home-image01">
          <img
            alt="image"
            src="/playground_assets/me_in_paris.png"
            className="home-image02"
          />
        </div>
      </header>
      <section className="home-mission">
        <h2 className="home-text08">
          Your website budget is low and you want to work with a human being to
          maintain a website you love.
          <br />
          <br />
          That's why I'm here.
        </h2>
      </section>
      <SplitSection
        title={"About Me"}
        paragraph1={
          "I am an engineering graduate of Stevens Institute of Technology with experience taking extracurricular classes in software development. I worked for 3 years as a software product manager for a biotech startup and wore many hats, including UX designer, account manager, and web developer. Since then, I've started a software company with colleagues to offer a financial advice marketplace called Rally. I built the entire front end of our platform and lead user acquisition efforts."
        }
        paragraph2={
          "My experience provides me with a solid understanding of the technology side and business side of small companies, which allows me to work well with small business owners to deliver a website that's valuable to them."
        }
        filename={"standing_coffee_like.png"}
      ></SplitSection>
      <section>
        <p>Here is some text.</p>
        <a href="/analytics">click me to see analytics</a>
      </section>
      <section>
        <div className="home-heading">
          <h2 className="home-text10">What you can expect...</h2>
          <p className="home-text11"></p>
        </div>
      </section>
      <section className="home-services">
        <div className="home-cards">
          <div className="home-row">
            <Card
              Icon={
                <IconBrandHipchat stroke={1.5} size="3em">
                  {" "}
                </IconBrandHipchat>
              }
              Title={"Easy Communication"}
              Description={
                "Reach out whenever works best for you. I'm always willing to be flexible for my clients."
              }
            ></Card>
            <Card
              Icon={<IconRocket stroke={1.5} size="3em"></IconRocket>}
              Title="Quick Launch"
              Description="Get your site up fast. Let's collaborate so your brand can be on the web within hours."
            ></Card>
          </div>
          <div className="home-row1">
            <Card
              Icon={
                <IconMagnet stroke={1.5} size="3em">
                  {" "}
                </IconMagnet>
              }
              Title="Marketing Guidance"
              Description="Make your website a magnet for recruiters, clients, or whomever you're trying to attract.  "
            ></Card>
          </div>
        </div>
      </section>
      {/* <section className="home-banner">
        <div className="home-container2">
          <div className="home-header5">
            <h2 className="home-title1">Expedite the process.</h2>
            <p className="home-description6">
              Take the first step and schedule a meeting today. <br></br> No
              commitment, no pressure.
            </p>
          </div>
          <a href="https://meetings.hubspot.com/jurbaczek">
            <button className="button">
              <span>
                <span>Schedule Meeting</span>
                <br></br>
              </span>
            </button>
          </a>
        </div>
      </section> */}
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

export default Home;
