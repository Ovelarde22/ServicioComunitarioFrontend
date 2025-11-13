import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Admin/Login";
import Inicio from "./pages/Admin/Inicio";
import ListaEncuestasProfes from "./pages/Admin/Profesores/ListaEncuestas";

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

      {/* 🔹 Lista de encuestas para profesores */}
      <Route
        path="/admin/profesores/encuestas"
        element={
          isLoggedIn ? (
            <ListaEncuestasProfes />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* 🔹 Cualquier otra ruta redirige al login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
