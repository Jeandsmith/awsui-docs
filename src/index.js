import { render } from "react-dom";
import "@awsui/global-styles/index.css";
import { StrictMode } from "react";
import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
