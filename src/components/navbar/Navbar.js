import React, { useEffect } from "react";
import styles from "../../pages/home/home.module.css";
import "./navbar.css";
import Links from "../links";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  // This will evaluate whether the user has scrolled.
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }
  return (
    <div className="home-navbar">
      <header
        className={(styles["home-navbar-interactive"], x.join(" "))}
        data-thq="thq-navbar"
      >
        {/* <div className="logo">
          <img src={Logo} alt="Logo" title="Logo" />
        </div>

        <nav className="navigation">
            <ul>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Home</a></li>
              <li><a href="#post3">Home</a></li>
              <li><a href="#post4">Home</a></li>
            </ul>
        </nav> */}
        <div className="home-branding">
          <span className="home-text">JWD</span>
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 128h768v768h-768z"></path>
          </svg>
          <span className="home-text01">Jordan Web Design</span>
        </div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <Links />
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <img
            alt="image"
            src="/playground_assets/group%202084%5B1%5D.svg"
            className="home-hamburger"
          />
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-branding1">
              <span className="home-text04">JWD</span>
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M128 128h768v768h-768z"></path>
              </svg>
              <span className="home-text05">Jordan Web Design</span>
            </div>
            <div data-thq="thq-close-menu" className="home-menu-close">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <Links />
        </div>
      </header>{" "}
    </div>
  );
};

export default Navbar;
