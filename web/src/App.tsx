// src/App.tsx
import "/src/assets/css/App.css";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";                // ← すぐ後で作る
import { RegistorTrainingPage } from "./pages/RegistorTrainingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/training" element={<RegistorTrainingPage />} />
    </Routes>
  );
}