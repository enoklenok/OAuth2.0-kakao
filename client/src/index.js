// # lib
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

// # root
import App from "./App";

// # style
import { theme, GlobalStyle } from "@style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
