import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

if (process.env.USE_MSW_SERVER === "true") {
  const { worker } = require("mocks/browser");

  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
