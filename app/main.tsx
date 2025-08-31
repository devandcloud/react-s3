import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

// Add Inter font from Google Fonts
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
