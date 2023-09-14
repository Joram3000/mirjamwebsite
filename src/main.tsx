import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/Error/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/Contact/index.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact/",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
