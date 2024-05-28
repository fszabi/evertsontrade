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
import TradeSites from "./routes/TradeSites";
import SkinRenting from "./routes/SkinRenting";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
            <HelmetProvider>
              <Helmet>
                <title>Kezdőlap - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Kezdőlap - evertsontrade.com"
                />
                <meta property="og:url" content="https://evertsontrade.com/" />
                <link rel="canonical" href="https://evertsontrade.com/" />
              </Helmet>
              <Home />
            </HelmetProvider>
          </Suspense>
        ),
      },
      {
        path: "/kereskedok",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Kereskedők - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Kereskedők - evertsontrade.com"
                />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/kereskedok"
                />
                <link
                  rel="canonical"
                  href="https://evertsontrade.com/kereskedok"
                />
              </Helmet>
              <Traders />
            </HelmetProvider>
          </Suspense>
        ),
      },
      {
        path: "/szolgaltatasok",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Szolgáltatások - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Szolgáltatások - evertsontrade.com"
                />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/szolgaltatasok"
                />
                <link
                  rel="canonical"
                  href="https://evertsontrade.com/szolgaltatasok"
                />
              </Helmet>
              <Services />
            </HelmetProvider>
          </Suspense>
        ),
      },
      {
        path: "/trade-up",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Trade-Up - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Trade-Up - evertsontrade.com"
                />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/trade-up"
                />
                <link
                  rel="canonical"
                  href="https://evertsontrade.com/trade-up"
                />
              </Helmet>
              <TradeUp />
            </HelmetProvider>
          </Suspense>
        ),
      },
      // {
      //   path: "/skin-berles",
      //   element: (
      //     <Suspense fallback="...is loading">
      //       <ScrollToTop />
      //       <HelmetProvider>
      //         <Helmet>
      //           <title>Skin Bérlés - evertsontrade.com</title>
      //           <meta
      //             property="og:title"
      //             content="Skin Bérlés - evertsontrade.com"
      //           />

      //           <meta
      //             property="og:url"
      //             content="https://evertsontrade.com/skin-berles"
      //           />
      //           <link
      //             rel="canonical"
      //             href="https://evertsontrade.com/skin-berles"
      //           />
      //         </Helmet>
      //         <SkinRenting />
      //       </HelmetProvider>
      //     </Suspense>
      //   ),
      // },
      {
        path: "/trade-alapok",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Trade-Alapok - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Trade-Alapok - evertsontrade.com"
                />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/trade-alapok"
                />
              </Helmet>
              <TradeGuide />
            </HelmetProvider>
          </Suspense>
        ),
      },
      {
        path: "/trade-oldalak",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Trade-Oldalak - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Trade-Oldalak - evertsontrade.com"
                />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/trade-oldalak"
                />
              </Helmet>
              <TradeSites />
            </HelmetProvider>
          </Suspense>
        ),
      },
      {
        path: "/scam-leiras",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Leírás - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Leírás - evertsontrade.com"
                />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/scam-leiras"
                />
              </Helmet>
              <ScamDescription />
            </HelmetProvider>
          </Suspense>
        ),
      },
      {
        path: "/kapcsolatfelvetel",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Kapcsolatfelvétel - evertsontrade.com</title>
                <meta
                  property="og:title"
                  content="Kapcsolatfelvétel - evertsontrade.com"
                />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/kapcsolatfelvetel"
                />
              </Helmet>
              <Contact />
            </HelmetProvider>
          </Suspense>
        ),
      },
      {
        path: "/siker",
        element: (
          <Suspense fallback="...is loading">
            <ScrollToTop />
            <HelmetProvider>
              <Helmet>
                <title>Siker - evertsontrade.com</title>
                <meta property="og:title" content="Siker - evertsontrade.com" />

                <meta
                  property="og:url"
                  content="https://evertsontrade.com/siker"
                />
              </Helmet>
              <Success />
            </HelmetProvider>
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
