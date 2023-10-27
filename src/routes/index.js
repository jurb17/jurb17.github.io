import React, { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loadable from "../components/Loadable";

// ==========================

const HomePage = Loadable(lazy(() => import("../views/home")));
const AboutPage = Loadable(lazy(() => import("../views/skydiveeastcoast")));
const ContactPage = Loadable(lazy(() => import("../views/Contact")));

const routes = () => [
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "404",
        element: <h1>404. This is just a blank page. No worries.</h1>,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
];

export default routes;
