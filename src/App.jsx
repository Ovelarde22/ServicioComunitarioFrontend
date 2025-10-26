import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Inicio from "./pages/Admin/Inicio";
import SeleccionTipo from "./pages/Admin/SeleccionTipo";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      {/* 🔹 Pantalla de login */}
      <Route
        path="/login"
        element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
      />

      {/* 🔹 Pantalla principal post-login */}
      <Route
        path="/home"
        element={isLoggedIn ? <Inicio /> : <Navigate to="/login" replace />}
      />

      {/* 🔹 Nueva pantalla intermedia (Estudiantes o Profesores) */}
      <Route
        path="/home/:tipo"
        element={
          isLoggedIn ? <SeleccionTipo /> : <Navigate to="/login" replace />
        }
      />

      {/* 🔹 Cualquier otra ruta redirige al login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
