import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { TransitionProvider } from "./context/TransitionContext";
import { ResizeProvider } from "./context/ResizeContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResizeProvider>
        <TransitionProvider>
          <App />
        </TransitionProvider>
      </ResizeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
