import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import Traders from "./routes/Traders";
import Services from "./routes/Services";
import Description from "./routes/Description";
import Contact from "./routes/Contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/kereskedok", element: <Traders /> },
      { path: "/szolgaltatasok", element: <Services /> },
      { path: "/leiras", element: <Description /> },
      { path: "/kapcsolatfelvetel", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
