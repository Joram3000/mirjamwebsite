import "@mantine/core/styles.css";
import theme from "./styles/mantine-theme";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/Error";
import Coaching from "./pages/Coaching";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import Systeemspel from "./pages/Systeemspel";
import UnderConstructionPage from "./pages/UnderConstruction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <UnderConstructionPage /> },
      { path: "/*", element: <Homepage /> },
      { path: "/about", element: <About /> },
      { path: "/coaching", element: <Coaching /> },
      { path: "/training", element: <Training /> },
      { path: "/systeemspel", element: <Systeemspel /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
