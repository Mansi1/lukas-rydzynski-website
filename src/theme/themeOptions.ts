import "@fontsource/roboto"
import "@fontsource/italiana"
import "@fontsource/raleway"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/600.css"

import { Theme, ThemeOptions } from "@mui/material/styles/createTheme"
import { GlobalProps } from "@emotion/react"
export const MAIN_COLOR = "#363D56"
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: MAIN_COLOR,
    },
    secondary: { main: "#ed8103" },
    background: { default: "#f6f7ff" },
  },
  typography: { fontFamily: "Roboto" },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
}

export const getGlobalStyles = (theme: Theme): GlobalProps["styles"] => ({
  a: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    cursor: "pointer",
  },
  "*": { fontFamily: theme.typography.fontFamily },
  h2: { fontSize: 28, fontFamily: "Italiana" },
  p: { fontSize: 18, fontFamily: "Raleway" },
  body: { margin: 0, padding: 0 },
  html: { margin: 0, padding: 0 },
})
