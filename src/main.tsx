import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ClickToComponent } from "click-to-react-component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ClickToComponent editor="cursor" />
    </BrowserRouter>
  </StrictMode>,
);
