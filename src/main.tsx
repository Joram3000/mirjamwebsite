import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error/index.tsx";
import ContactPage from "./pages/Contact/index.tsx";
import Root from "./routes/root.tsx";
import AboutPage from "./pages/About/index.tsx";
import HomePage from "./pages/Home/index.tsx";
import UnderConstructionPage from "./pages/UnderConstruction/index.tsx";

import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UnderConstructionPage />,
      },
      {
        path: "home/",
        element: <HomePage />,
      },
      {
        path: "contact/",
        element: <ContactPage />,
      },
      {
        path: "about/",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
