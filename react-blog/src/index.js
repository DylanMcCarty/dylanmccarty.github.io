import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js'
import "./index.css";
import { AiOutlineMenu } from "react-icons/ai";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app">
      {/* <div class="dropdown fixed-top">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <AiOutlineMenu />
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#projects">
            Projects
          </a>
          <a class="dropdown-item" href="#aboutme">
            About Me
          </a>
        </div>
      </div> */}
      <App />
    </div>
  </React.StrictMode>
);
