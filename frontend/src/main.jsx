import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";

// Use Vite's base URL, strip trailing slash for React Router
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
