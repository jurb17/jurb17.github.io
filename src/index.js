import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// custom imports
import App from "./App";
import Home from "./views/home";
import "./style.css";
import SkyDiveEastCoast from "./views/skydiveeastcoast";
// import config from "./config";

// ========================================

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <div>
      <Routes>
        <Route Component={Home} exact path="" />
        <Route Component={Home} exact path="/" />
        <Route Component={Home} exact path="/home" />
        <Route Component={SkyDiveEastCoast} exact path="/skydiveeastcoast" />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
