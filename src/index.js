import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
