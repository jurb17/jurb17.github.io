import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jordan Web Design</title>
        <meta property="og:title" content="Jordan Web Design" />
      </Helmet>
      <Navbar></Navbar>
      <p>hello world.</p>
    </>
  );
};

export default Home;
