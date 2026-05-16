import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Layout } from "./features/sections/Layout";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout/>
  </StrictMode>,
);
