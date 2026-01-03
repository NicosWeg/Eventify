import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/index.module.css";
import App from "./views/App.jsx";
import Events from "./views/Events.jsx";
import Event from "./views/Event.jsx";
import ErrorPage from "./views/ErrorPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/" element={<Events />} />
        <Route path="/event" element={<Event />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
