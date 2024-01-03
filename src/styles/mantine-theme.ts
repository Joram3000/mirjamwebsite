import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Inter, sans-serif", // FONT KLOPT NOG NIET
  primaryColor: "lime",
  defaultRadius: 0,
  colors: {
    custom: [
      "#F2F3ED", // broken white
      "#024D7B", // blue
      "#024D7B", // darkblue
      "#008080", // ziekenhuis groen
      "#8BC53E", //limey

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
    Anchor: {
      styles: (theme: {
        colors: {
          custom: string[];
        };
      }) => ({
        root: {
          color: "white",
        },
      }),
    },
  },
});

export default theme;
