import { createTheme } from "@mui/material/styles";

export const theme = customizeComponents({
  palette: {
    primary: {
      main: "#177EB9",
      submain: "#205072",
      notify: "#FFF5DC",
    },
    secondary: {
      main: "#95334B",
      submain: "#747776",
      cardOne: "#E0397A",
      cardThree: "#11A151",
      cardFour: "#2C3436",
      notify: "#B17D00",
    },
    complementary: {
      main: "#161B2E",
      contrastText: "#ffffff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"].join(),
    fontSize: 12,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
      variants: [
        {
          props: { variant: "contained", color: "primary", opaque: true },
          style: { backgroundColor: "#d0e6f6" },
        },
        {
          props: { variant: "outlined", color: "primary", opaque: true },
          style: {
            backgroundColor: "#d0e6f6",
            ":hover": {
              backgroundColor: "#d0e6f6",
            },
          },
        },
        {
          props: { variant: "text", color: "primary", opaque: true },
          style: {
            backgroundColor: "#d0e6f6",
            paddingLeft: 15,
            paddingRight: 15,
            ":hover": {
              backgroundColor: "#d0e6f6",
            },
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      variants: [
        {
          props: { variant: "contained", color: "primary", opaque: true },
          style: { backgroundColor: "#d0e6f6" },
        },
        {
          props: { variant: "outlined", color: "primary", opaque: true },
          style: { backgroundColor: "#d0e6f6" },
        },
        {
          props: { variant: "text", color: "primary", opaque: true },
          style: {
            backgroundColor: "#d0e6f6",
            paddingLeft: 15,
            paddingRight: 15,
            ":hover": {
              backgroundColor: "#d0e6f6",
            },
          },
        },
      ],
    },
  },
});

export default theme;

/**
 *
 * @param {import("@mui/material").Theme} theme
 */
function customizeComponents(theme) {
  return createTheme({
    ...theme,
  });
}

[
  "primary",
  "secondary",
  "complementary",
  "success",
  "info",
  "warning",
  "error",
  "common",
  "text",
  "background",
  "action",
].forEach((palatteKey) => {
  Object.keys(theme.palette[palatteKey]).forEach((palatteKeyColor) => {
    document.documentElement.style.setProperty(
      `--color-${palatteKey}-${palatteKeyColor}`,
      theme.palette[palatteKey][palatteKeyColor]
    );
  });
});
