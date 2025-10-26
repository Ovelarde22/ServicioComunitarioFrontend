import logoColegio from "../assets/escudoSanJose.svg";

function LoginHeader() {
  return (
    <div className="flex flex-col items-center md:items-start mb-6">
      <img
        src={logoColegio}
        alt="Logo Colegio San José De Tarbes"
        className="w-20 h-20 object-contain mb-3"
      />
      <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">
        Inicio de Sesión
      </h1>
    </div>
  );
}

export default LoginHeader;
