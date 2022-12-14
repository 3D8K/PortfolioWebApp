import React from "react";
import ReactDOM from "react-dom/client";
import { IndexWrapper } from "./styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IndexWrapper />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
