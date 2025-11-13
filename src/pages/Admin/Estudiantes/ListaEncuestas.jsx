import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListaEncuestasProfes() {
  const navigate = useNavigate();

  // 📄 Datos iniciales simulados (solo en memoria)
  const [surveys, setSurveys] = useState([
    {
      id: 1,
      title: "Clima laboral docente",
      description: "Percepción general del entorno de trabajo.",
      published: true,
      updatedAt: "2025-10-12T14:25:00Z",
    },
    {
      id: 2,
      title: "Satisfacción docente",
      description: "Opinión sobre recursos y apoyo institucional.",
      published: false,
      updatedAt: "2025-10-09T09:10:00Z",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | published | draft
  const [confirmDelete, setConfirmDelete] = useState(null);

  // 🔍 Filtrado de encuestas
  const filtered = surveys
    .filter((s) => s.title.toLowerCase().includes(search.toLowerCase().trim()))
    .filter((s) =>
      filter === "all"
        ? true
        : filter === "published"
        ? s.published
        : !s.published
    );

  // 🗑️ Eliminar (solo visual)
  const handleDelete = (id) => {
    setSurveys((prev) => prev.filter((s) => s.id !== id));
    setConfirmDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-screen">
      {/* 🔹 Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Cuestionarios — Estudiantes
          </h1>
          <p className="text-gray-600 text-sm">
            Administra las encuestas existentes o crea una nueva.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => navigate("/home")}
            className="px-3 py-2 border rounded-md hover:bg-gray-50 text-sm"
          >
            ← Volver al Inicio
          </button>
          <button
            onClick={() => navigate("/admin/profesores/encuestas/nueva")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-semibold"
          >
            + Nueva encuesta
          </button>
        </div>
      </div>

      {/* 🔹 Filtros */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <input
          type="text"
          placeholder="Buscar por título"
          className="w-full md:w-80 px-3 py-2 border rounded-md text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-48 px-3 py-2 border rounded-md text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos los estados</option>
          <option value="published">Publicadas</option>
          <option value="draft">Borradores</option>
        </select>
      </div>

      {/* 🔹 Tabla */}
      <div className="overflow-x-auto bg-white border rounded-lg shadow-sm">
        <table className="min-w-full text-base">
          <thead className="bg-gray-50 text-left text-sm text-gray-600">
            <tr>
              <th className="p-3">Título</th>
              <th className="p-3">Estado</th>
              <th className="p-3">Actualizada</th>
              <th className="p-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-gray-500 italic"
                >
                  No hay encuestas que coincidan.
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{s.title}</td>
                  <td className="p-3">
                    {s.published ? (
                      <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-700">
                        Publicada
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700">
                        Borrador
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-gray-600">
                    {new Date(s.updatedAt).toLocaleDateString("es-ES", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => alert(`Editar encuesta: ${s.title}`)}
                        className="px-2 py-1 text-xs rounded border"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => setConfirmDelete(s.id)}
                        className="px-2 py-1 text-xs rounded bg-red-600 text-white"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 🔹 Confirmación de eliminación */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Eliminar encuesta
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              ¿Seguro que deseas eliminar esta encuesta? Esta acción no se puede
              deshacer.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-3 py-1.5 rounded border text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="px-3 py-1.5 rounded bg-red-600 text-white text-sm"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Colegio San José De Tarbes — Sistema de
        encuestas
      </p>
    </div>
  );
}
