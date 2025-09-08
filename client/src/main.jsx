import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ uses this
import App from "./app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
    <Router>
      <StateContextProvider>
      <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
