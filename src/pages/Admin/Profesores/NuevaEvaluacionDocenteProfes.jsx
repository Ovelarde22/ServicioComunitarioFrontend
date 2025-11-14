import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NuevaEvaluacionDocenteProfes() {
  const navigate = useNavigate();
  const [incluirComentarioGeneral, setIncluirComentarioGeneral] =
    useState(true);
  const [tituloEncuesta, setTituloEncuesta] = useState("");

  const [criteriosParteI, setCriteriosParteI] = useState([
    { id: 1, text: "Asiste puntualmente a su jornada laboral." },
    { id: 2, text: "Asiste puntualmente a su salón de clases." },
    { id: 3, text: "Uso correcto del uniforme institucional." },
    { id: 4, text: "Mantiene una presentación personal adecuada." },
    { id: 5, text: "Demuestra actitud respetuosa hacia los estudiantes." },
    { id: 6, text: "Mantiene relaciones cordiales con el personal docente." },
    { id: 7, text: "Promueve el respeto y la convivencia dentro del aula." },
  ]);

  const [criteriosParteII, setCriteriosParteII] = useState([
    {
      id: 101,
      text: "Registra la asistencia de los estudiantes de forma oportuna.",
    },
    { id: 102, text: "Mantiene actualizada la planificación de clases." },
    { id: 103, text: "Entrega a tiempo los registros y reportes solicitados." },
    {
      id: 104,
      text: "Cumple con los horarios y cambios de clase establecidos.",
    },
    {
      id: 105,
      text: "Organiza y utiliza adecuadamente los recursos del aula.",
    },
    { id: 106, text: "Mantiene al día los instrumentos de evaluación." },
    {
      id: 107,
      text: "Respeta y aplica las normas administrativas de la institución.",
    },
  ]);

  const [criteriosParteIII, setCriteriosParteIII] = useState([
    {
      id: 201,
      text: "Propicia la participación activa de los estudiantes durante la clase.",
    },
    {
      id: 202,
      text: "Explica los contenidos con claridad y usando ejemplos pertinentes.",
    },
    {
      id: 203,
      text: "Utiliza estrategias didácticas variadas y adecuadas al grupo.",
    },
    {
      id: 204,
      text: "Promueve el pensamiento crítico y la reflexión en los estudiantes.",
    },
    {
      id: 205,
      text: "Relaciona los contenidos con situaciones de la vida cotidiana.",
    },
    {
      id: 206,
      text: "Verifica la comprensión de los contenidos antes de avanzar.",
    },
    {
      id: 207,
      text: "Atiende las diferencias individuales y adapta su enseñanza cuando es necesario.",
    },
  ]);

  const agregarCriterio = (setFn) => {
    setFn((prev) => [...prev, { id: Date.now(), text: "" }]);
  };

  const actualizarTexto = (id, value, setFn) => {
    setFn((prev) => prev.map((c) => (c.id === id ? { ...c, text: value } : c)));
  };

  const eliminarCriterio = (id, setFn) => {
    setFn((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#C5C9DA] py-10">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Nueva evaluación docente – Profesores
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Completa la información para registrar el acompañamiento al
              docente.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/profesores/encuestas")}
            className="px-3 py-2 border rounded-md text-sm bg-white hover:bg-gray-50"
          >
            ← Volver al listado
          </button>
        </div>

        {/* Card principal */}
        <div className="bg-[#F0EDE2] rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Información de la encuesta
            </h2>

            <div className="space-y-4">
              <label className="block text-sm text-gray-700 mb-1">
                Nombre de la encuesta
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ej: Clima laboral docente, Satisfacción docente..."
                value={tituloEncuesta}
                onChange={(e) => setTituloEncuesta(e.target.value)}
              />
            </div>
          </section>

          {/* Bloque 1: Datos generales */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Datos generales del acompañamiento
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Acompañante
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nombre de quien acompaña"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Docente acompañado
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Nombre del docente"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Materia
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Ej: Matemática, Castellano…"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Grado / Año
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Ej: 3er año"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Sección
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Ej: A, B…"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Parte I – Área personal y social */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Parte I – Área personal y social
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Agrega, elimina o modifica los criterios de evaluación.
            </p>

            <div className="space-y-4">
              {criteriosParteI.map((c, index) => (
                <div
                  key={c.id}
                  className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-4 rounded-lg border"
                >
                  <span className="font-medium text-gray-700">
                    {index + 1}.
                  </span>

                  <input
                    type="text"
                    value={c.text}
                    onChange={(e) =>
                      actualizarTexto(c.id, e.target.value, setCriteriosParteI)
                    }
                    className="flex-1 px-3 py-2 border rounded-md w-full text-sm"
                    placeholder="Escribe el criterio…"
                  />

                  <button
                    onClick={() => eliminarCriterio(c.id, setCriteriosParteI)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => agregarCriterio(setCriteriosParteI)}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md"
            >
              + Agregar criterio
            </button>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Parte II – Aspectos administrativos
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Agrega, elimina o modifica los criterios administrativos.
            </p>

            <div className="space-y-4">
              {criteriosParteII.map((c, index) => (
                <div
                  key={c.id}
                  className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-4 rounded-lg border"
                >
                  <span className="font-medium text-gray-700">
                    {index + 1}.
                  </span>

                  <input
                    type="text"
                    value={c.text}
                    onChange={(e) =>
                      actualizarTexto(c.id, e.target.value, setCriteriosParteII)
                    }
                    className="flex-1 px-3 py-2 border rounded-md w-full text-sm"
                    placeholder="Escribe el criterio…"
                  />

                  <button
                    onClick={() => eliminarCriterio(c.id, setCriteriosParteII)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => agregarCriterio(setCriteriosParteII)}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md"
            >
              + Agregar criterio
            </button>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Parte III – Aspectos académicos
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Agrega, elimina o modifica los criterios académicos.
            </p>

            <div className="space-y-4">
              {criteriosParteIII.map((c, index) => (
                <div
                  key={c.id}
                  className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-white p-4 rounded-lg border"
                >
                  <span className="font-medium text-gray-700">
                    {index + 1}.
                  </span>

                  <input
                    type="text"
                    value={c.text}
                    onChange={(e) =>
                      actualizarTexto(
                        c.id,
                        e.target.value,
                        setCriteriosParteIII
                      )
                    }
                    className="flex-1 px-3 py-2 border rounded-md w-full text-sm"
                    placeholder="Escribe el criterio…"
                  />

                  <button
                    onClick={() => eliminarCriterio(c.id, setCriteriosParteIII)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => agregarCriterio(setCriteriosParteIII)}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md"
            >
              + Agregar criterio
            </button>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Comentario general del acompañamiento
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Define si esta evaluación debe incluir un campo para que el
              acompañante escriba observaciones finales al aplicar la encuesta.
            </p>

            <label className="flex items-center gap-3 cursor-pointer">
              <span className="text-gray-800 font-medium">
                Incluir comentario general
              </span>

              <input
                type="checkbox"
                checked={incluirComentarioGeneral}
                onChange={() =>
                  setIncluirComentarioGeneral(!incluirComentarioGeneral)
                }
                className="w-5 h-5 accent-blue-600"
              />
            </label>
          </section>

          {/* Footer de acciones */}
          <section className="flex flex-col md:flex-row gap-3 md:justify-end">
            <button
              onClick={() => navigate("/admin/profesores/encuestas")}
              className="px-3 py-2 border rounded-md text-sm bg-white hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-500 text-white text-sm hover:bg-gray-600">
              Guardar borrador
            </button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">
              Guardar y volver al listado
            </button>
          </section>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Colegio San José De Tarbes — Sistema de
          evaluaciones docentes
        </p>
      </div>
    </div>
  );
}
