import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/index.module.css";
import App from "./views/App.jsx";
import MainPage from "./views/MainPage.jsx";
import Event from "./views/mainPage/Event.jsx";
import ErrorPage from "./views/ErrorPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
