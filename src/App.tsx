import "@mantine/core/styles.css";
import theme from "./styles/mantine-theme";
import { MantineProvider } from "@mantine/core";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import MirjamKroonHomepage from "./pages/Home";
import MirjamKroonAbout from "./pages/About";
import ErrorPage from "./pages/Error";
import MirjamKroonCoaching from "./pages/Coaching";
import MirjamKroonContact from "./pages/Contact";
import MirjamKroonTraining from "./pages/Training";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MirjamKroonHomepage /> },
      { path: "/*", element: <MirjamKroonHomepage /> },
      { path: "/about", element: <MirjamKroonAbout /> },
      { path: "/coaching", element: <MirjamKroonCoaching /> },
      { path: "/training", element: <MirjamKroonTraining /> },
      { path: "/systeemspel", element: <MirjamKroonCoaching /> },
      { path: "/contact", element: <MirjamKroonContact /> },
    ],
  },
]);

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
