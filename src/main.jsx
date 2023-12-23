import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import Traders from "./routes/Traders";
import TradeGuide from "./routes/TradeGuide";
import Services from "./routes/Services";
import TradeUp from "./routes/TradeUp";
import ScamDescription from "./routes/ScamDescription";
import Contact from "./routes/Contact";
import Success from "./routes/Success";
import SkinRenting from "./routes/SkinRenting";
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
        path: "/skin-berles",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <SkinRenting />
          </Suspense>
        ),
      },
      {
        path: "/trade-alapok",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <TradeGuide />
          </Suspense>
        ),
      },
      {
        path: "/scam-leiras",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <ScamDescription />
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
