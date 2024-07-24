"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A90E2",
      light: "#7EB3F2",
      dark: "#357ABD",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#50E3C2",
      light: "#82EED4",
      dark: "#38A693",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D0021B",
      light: "#E74C3C",
      dark: "#A4031F",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F5A623",
      light: "#F8C471",
      dark: "#A87117",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#4A90E2",
      light: "#7EB3F2",
      dark: "#357ABD",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#7ED321",
      light: "#9FDF7A",
      dark: "#558B2F",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
          width: "100%",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
      },
    },
  },
  typography: {
    fontFamily: "NanumBarunGothic",
  },
});

export default theme;
