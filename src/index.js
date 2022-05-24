import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const StyleVariables = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow: hidden;
  }
`;

ReactDOM.render(
  <StrictMode>
    <StyleVariables />
    <App />
  </StrictMode>,
  document.getElementById("root")
);

//window.onscroll = () => updateScrollPosition(window.scrollX, window.scrollY);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
