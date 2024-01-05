import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Avenir, sans-serif", // FONT Moet AVENIR ZIJN
  primaryColor: "lime",
  defaultRadius: 0,
  colors: {
    custom: [
      "#F2F3ED", // broken white
      "#024D7B", // blue
      "#024D7B", // darkblue
      "#008080", // donker groen
      "#8BC53E", //fel groen
      "#edf7f6", //lichtgroen?

      "#FFEEDF",
      "#F8D7BF",
      "#F3BD96",
      "#EEA36D",
      "#E8833A",
      "#E46F1B",
      "#B75915",
      "#894310",
      "#5B2D0B",
      "#2E1605",
    ],
  },
  components: {
    Text: {
      styles: {
        h1: {
          color: "green",
          fontsize: "40px",

          // Add any other styles you want to change for the <Title order={2}> component
        },
      },
    },
    Anchor: {
      styles: () => ({
        root: {
          color: "white",
        },
      }),
    },
  },
});

export default theme;
