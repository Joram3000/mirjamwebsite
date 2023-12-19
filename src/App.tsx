import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Layout from "./components/layout";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "green",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Layout />
    </MantineProvider>
  );
}

export default App;
