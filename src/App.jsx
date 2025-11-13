import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useCallback } from "react";
import Login from "./pages/Admin/Login";
import Inicio from "./pages/Admin/Inicio";
import ListaEncuestasProfes from "./pages/Admin/Profesores/ListaEncuestas";
import ListaEncuestasEstudiantes from "./pages/Admin/Estudiantes/ListaEncuestas";

export default function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("authToken");
  });

  const handleLoginSuccess = useCallback((token) => {
    if (token) localStorage.setItem("authToken", token);
    else localStorage.setItem("authToken", "1");
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  }, []);

  return (
    <Routes>
      {/* 🔹 Pantalla de login */}
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/home" replace />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )
        }
      />

      {/* 🔹 Pantalla principal post-login */}
      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <Inicio onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
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

      {/* 🔹 Lista de encuestas para profesores */}
      <Route
        path="/admin/estudiantes/encuestas"
        element={
          isLoggedIn ? (
            <ListaEncuestasEstudiantes />
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
