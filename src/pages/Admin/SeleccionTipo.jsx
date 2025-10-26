import { useParams, useNavigate } from "react-router-dom";

export default function SeleccionTipo() {
  const { tipo } = useParams();
  const navigate = useNavigate();

  const titulo =
    tipo === "estudiantes"
      ? "Cuestionario para Estudiantes"
      : "Cuestionario para Profesores";

  return (
    <div className="min-h-screen bg-[#C5C9DA] flex items-center justify-center p-6">
      <div className="bg-[#F0EDE2] w-full max-w-3xl rounded-3xl shadow-xl border border-gray-200 p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{titulo}</h1>
        <p className="text-gray-600 mt-2">
          Selecciona la acción que deseas realizar:
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <button
            onClick={() => navigate(`/admin/encuestas/nueva?tipo=${tipo}`)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Modificar Cuestionario
          </button>
          <button
            onClick={() => navigate(`/admin/encuestas?filtro=${tipo}`)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
          >
            Ver Resultados
          </button>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          <p>
            Consejo: asegúrate de haber guardado todos los cambios antes de
            publicar tus resultados.
          </p>
        </div>
      </div>
    </div>
  );
}
