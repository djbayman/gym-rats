import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ExerciesesProvider from "./context/ExerciesesContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExerciesesProvider>
        <App />
      </ExerciesesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
