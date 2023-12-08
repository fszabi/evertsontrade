import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import Traders from "./routes/Traders";
import Services from "./routes/Services";
import TradeUp from "./routes/TradeUp";
import Description from "./routes/Description";
import Contact from "./routes/Contact";
import Success from "./routes/Success";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense } from "react";
import "./index.css";

import "../i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/kereskedok",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <Traders />
          </Suspense>
        ),
      },
      {
        path: "/szolgaltatasok",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/trade-up",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <TradeUp />
          </Suspense>
        ),
      },
      {
        path: "/leiras",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <Description />
          </Suspense>
        ),
      },
      {
        path: "/kapcsolatfelvetel",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/siker",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <Success />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
