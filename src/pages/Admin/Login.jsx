import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";
import LoginForm from "../../components/LoginForm";
import LoginImage from "../../components/LoginImage";

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (pin === "12345") {
        setLoading(false);
        onLoginSuccess?.(); // notifica al App.jsx
        navigate("/home"); // redirige
      } else {
        setError("El PIN ingresado es incorrecto.");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#C5C9DA] p-2 md:p-6">
      <loadingHeader />

      {/* encabezado superior */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Sistema de Administración de Encuestas
        </h1>
        <p className="text-gray-600 text-sm mt-1">Colegio San José De Tarbes</p>
        <div className="mt-3 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* card */}
      <div className="bg-gradient-to-r from-[#F0EDE2] via-[#F4F2EA] to-[#FAFAFA] w-full max-w-5xl rounded-3xl shadow-xl border border-gray-200 flex flex-col md:flex-row overflow-hidden min-h-[250px] animate-fade-in">
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <LoginHeader />
          {/* componente presentacional controlado */}
          <LoginForm
            pin={pin}
            setPin={setPin}
            loading={loading}
            error={error}
            onSubmit={handleSubmit}
          />
        </div>
        <LoginImage />
      </div>
    </div>
  );
}

export default Login;
