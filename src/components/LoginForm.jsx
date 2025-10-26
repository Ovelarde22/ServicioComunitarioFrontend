function LoginForm({ pin, setPin, loading, error, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="pin"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          PIN de acceso (5 dígitos)
        </label>
        <input
          id="pin"
          type="number"
          inputMode="numeric"
          min="0"
          step="1"
          maxLength="5"
          className={`w-full px-4 py-2 border rounded-md text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all ${
            error ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="•••••"
          value={pin}
          onChange={(e) => {
            const cleanValue = e.target.value
              .replace(/[^0-9]/g, "")
              .slice(0, 5);
            setPin(cleanValue);
          }}
          onKeyDown={(e) => {
            if (["-", "+", "e", "E", ".", ","].includes(e.key)) {
              e.preventDefault();
            }
          }}
          onPaste={(e) => {
            const pasted = e.clipboardData.getData("text");
            if (/[^0-9]/.test(pasted)) e.preventDefault();
          }}
        />
        {error && (
          <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pin.length !== 5 || loading}
        className={`w-full py-2 rounded-md font-semibold text-white transition-all duration-200 ${
          pin.length === 5 && !loading
            ? "bg-blue-600 hover:bg-blue-700 shadow-sm"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </button>

      <p className="mt-10 text-xs text-center text-gray-400 leading-relaxed">
        © 2025 Colegio San José De Tarbes <br />
        Sistema de acceso a encuestas
      </p>
    </form>
  );
}

export default LoginForm;
