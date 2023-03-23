import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js'
import "./index.css";
// import { AiOutlineMenu } from "react-icons/ai";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app">
      <App />
    </div>
  </React.StrictMode>
);
