import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Inter, sans-serif", // FONT KLOPT NOG NIET
  primaryColor: "lime",
  defaultRadius: 0,
  colors: {
    custom: [
      "#008080",
      "#F2F3ED",
      "#024D7B",
      "#8BC53E",
      "#024D7B",
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
