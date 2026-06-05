import * as React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { LandingPage } from "./components/landing/LandingPage";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
);
