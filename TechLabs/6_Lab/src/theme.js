import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // MUI default blue
    },
    secondary: {
      main: "#ff9800", // Orange
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none", // remove all caps
        },
      },
    },
  },
});

export default theme;
