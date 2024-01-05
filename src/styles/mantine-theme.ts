import { createTheme, rem } from "@mantine/core";

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
  headings: {
    // properties for all headings
    fontWeight: "400",
    // properties for individual headings, all of them are optional
    sizes: {
      h1: {
        // fontSize: rem(36),
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
