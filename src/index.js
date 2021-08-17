import React from "react";
import ReactDOM from "react-dom";

import { isMockServer, ise2e } from "utils/runtime";

import App from "./App";

if (isMockServer || ise2e) {
  const { worker } = require("mocks/browser");

  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
