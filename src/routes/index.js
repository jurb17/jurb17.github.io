import React, { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loadable from "../components/Loadable";

// ==========================

const HomePage = Loadable(lazy(() => import("../pages/home/home")));
const AboutPage = Loadable(
  lazy(() => import("../pages/skydiveeastcoast/skydiveeastcoast"))
);
const ContactPage = Loadable(lazy(() => import("../pages/contact/Contact")));
const AnalyticsPage = Loadable(
  lazy(() => import("../pages/analytics/Analytics"))
);
const HousePage = Loadable(lazy(() => import("../pages/house/House")));

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
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "house",
        element: <HousePage />,
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
