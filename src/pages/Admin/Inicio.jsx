import { useState } from "react";

export default function Inicio() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  // 🔹 Cuando el usuario selecciona Estudiantes o Profesores
  const handleSeleccion = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  // 🔹 Para volver atrás
  const handleVolver = () => {
    setTipoSeleccionado(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-3 md:px-8 py-8 min-h-screen">
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Sistema de Administración de Encuestas
        </h1>
        <p className="text-gray-600 mt-2">Colegio San José De Tarbes</p>
        <div className="mt-3 w-24 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      {/* Si aún no se ha seleccionado ningún tipo */}
      {!tipoSeleccionado && (
        <>
          {/* Título */}
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              Selecciona el tipo de cuestionario
            </h2>
            <p className="text-gray-600 mt-2">
              Elige a quién va dirigido para comenzar.
            </p>
          </div>

          {/* Opciones (Estudiantes / Profesores) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              onClick={() => handleSeleccion("estudiantes")}
              className="cursor-pointer bg-[#F0EDE2] rounded-2xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-blue-600 font-bold">
                  E
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Cuestionario a Estudiantes
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Encuestas sobre satisfacción, clima escolar y servicios.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleSeleccion("profesores")}
              className="cursor-pointer bg-[#F0EDE2] rounded-2xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-white bg-indigo-600 font-bold">
                  P
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Cuestionario a Profesores
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Encuestas sobre prácticas docentes y condiciones de aula.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info institucional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow">
              <h3 className="text-base font-semibold text-gray-800">
                Propósito del sistema
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Este sistema fortalece la comunicación entre estudiantes y
                docentes del Colegio San José De Tarbes, promoviendo la mejora
                continua de la calidad educativa.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow">
              <h3 className="text-base font-semibold text-gray-800">
                Confidencialidad
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Los resultados son confidenciales y se utilizan para diseñar
                estrategias de mejora continua institucional.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Si ya se seleccionó un tipo */}
      {tipoSeleccionado && (
        <div className="mt-16 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {tipoSeleccionado === "estudiantes"
              ? "Cuestionario para Estudiantes"
              : "Cuestionario para Profesores"}
          </h2>
          <p className="text-gray-600 mb-8">
            Selecciona una acción para continuar.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
              onClick={() =>
                alert(`Modificar cuestionario de ${tipoSeleccionado}`)
              }
            >
              Modificar Cuestionario
            </button>

            <button
              className="cursor-pointer px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
              onClick={() => alert(`Ver resultados de ${tipoSeleccionado}`)}
            >
              Ver Resultados
            </button>
          </div>

          <button
            onClick={handleVolver}
            className="cursor-pointer mt-10 text-gray-600 underline text-sm hover:text-gray-800"
          >
            ← Volver
          </button>
        </div>
      )}

      {/* Pie */}
      <p className="mt-16 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Colegio San José De Tarbes — Sistema de
        encuestas
      </p>
    </div>
  );
}
