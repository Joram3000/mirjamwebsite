import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Avenir, sans-serif",
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
    ],
  },
  headings: {
    fontWeight: "400",
    sizes: {
      h1: {
        // lineHeight: "1.4",
      },
    },
  },
  components: {
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
