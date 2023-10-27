import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// custom imports
import App from "./App";
import Home from "./pages/home/home";
import "./style.css";
import SkyDiveEastCoast from "./pages/skydiveeastcoast/skydiveeastcoast";
// import config from "./config";

// ========================================

ReactDOM.render(
  <BrowserRouter>
    <App />
    <div>nothing</div>
  </BrowserRouter>,
  document.getElementById("app")
);
