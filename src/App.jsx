import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

import Login from "./pages/Admin/Login";
import Inicio from "./pages/Admin/Inicio";
import ListaEncuestasProfes from "./pages/Admin/Profesores/ListaEncuestas";
import ListaEncuestasEstudiantes from "./pages/Admin/Estudiantes/ListaEncuestas";
import NuevaEvaluacionDocenteProfes from "./pages/Admin/Profesores/NuevaEvaluacionDocenteProfes";

// Tiempo real de expiración de sesión (5 min)
const SESSION_TIMEOUT_MS = 5 * 60 * 1000;

// Tiempo antes de expirar para mostrar el aviso (1 min)
const WARNING_TIME_MS = 60 * 1000;

export default function App() {
  /* ---------------------------------------------------
     🔹 Verificación inicial de si la sesión sigue válida
  ------------------------------------------------------ */
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem("authToken");
    const lastActivity = localStorage.getItem("lastActivity");

    if (!token || !lastActivity) return false;

    const inactiveTime = Date.now() - Number(lastActivity);

    if (inactiveTime > SESSION_TIMEOUT_MS) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("lastActivity");
      return false;
    }

    return true;
  });

  /* 🔹 Estado del aviso de expiración */
  const [showWarning, setShowWarning] = useState(false);

  /* ---------------------------------------------------
     🔹 Login exitoso
  ------------------------------------------------------ */
  const handleLoginSuccess = useCallback((token) => {
    localStorage.setItem("authToken", token || "1");
    localStorage.setItem("lastActivity", String(Date.now()));
    setIsLoggedIn(true);
  }, []);

  /* ---------------------------------------------------
     🔹 Logout
  ------------------------------------------------------ */
  const handleLogout = useCallback(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("lastActivity");
    setIsLoggedIn(false);
    setShowWarning(false);
  }, []);

  /* ---------------------------------------------------
     🔹 Registrar actividad real del usuario
       Solo click / teclado reinician sesión
  ------------------------------------------------------ */
  useEffect(() => {
    const updateActivity = () => {
      localStorage.setItem("lastActivity", String(Date.now()));
      setShowWarning(false); // por si estaba visible
    };

    window.addEventListener("click", updateActivity);
    window.addEventListener("keydown", updateActivity);

    return () => {
      window.removeEventListener("click", updateActivity);
      window.removeEventListener("keydown", updateActivity);
    };
  }, []);

  /* ---------------------------------------------------
     🔹 Verificador automático (cada 1 segundo)
       - Muestra aviso cuando falte 1 min
       - Expira sesión al pasar el tiempo
  ------------------------------------------------------ */
  useEffect(() => {
    const interval = setInterval(() => {
      const last = Number(localStorage.getItem("lastActivity"));
      const now = Date.now();
      const inactive = now - last;

      // Mostrar aviso 1 min antes de expirar
      if (
        inactive > SESSION_TIMEOUT_MS - WARNING_TIME_MS &&
        inactive < SESSION_TIMEOUT_MS
      ) {
        setShowWarning(true);
      }

      // Expirar sesión cuando se cumple el tiempo
      if (inactive > SESSION_TIMEOUT_MS) {
        handleLogout();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [handleLogout]);

  /* ---------------------------------------------------
     🔹 Render de rutas
  ------------------------------------------------------ */

  return (
    <>
      <Routes>
        {/* Login */}
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

        {/* Inicio (home) */}
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

        {/* Listas */}
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

        {/* Crear nueva encuesta */}
        <Route
          path="/admin/profesores/encuestas/nueva"
          element={
            isLoggedIn ? (
              <NuevaEvaluacionDocenteProfes />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      {/* ---------------------------------------------------
         🔹 Modal de aviso — Sesión por expirar
      ------------------------------------------------------ */}
      {showWarning && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              ⚠ Su sesión expirará pronto
            </h2>

            <p className="text-gray-600 mb-4">
              Su sesión se cerrará por inactividad en menos de 1 minuto.
              <br />
              Haga clic para mantenerla activa.
            </p>

            <button
              onClick={() => {
                localStorage.setItem("lastActivity", String(Date.now()));
                setShowWarning(false);
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Continuar sesión
            </button>
          </div>
        </div>
      )}
    </>
  );
}
