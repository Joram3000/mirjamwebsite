import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import MirjamKroonHomepage from "./pages/Home";
import MirjamKroonAbout from "./pages/About";
import ErrorPage from "./pages/Error";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MirjamKroonHomepage /> },
      { path: "/*", element: <MirjamKroonHomepage /> },
      { path: "/about", element: <MirjamKroonAbout /> },
    ],
  },
]);

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "green",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
