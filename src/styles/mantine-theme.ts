import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Verdana, sans-serif",
  primaryColor: "lime",
  defaultRadius: 0,
  colors: {
    cta: [
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
          brand: any[];
        };
      }) => ({
        root: {
          color: theme.colors.brand[1],
        },
      }),
    },
  },
});

export default theme;
