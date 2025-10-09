function App() {
  return (
    <>
      <main className="main">
        <article>
          <h1>¿Qué cuestionario desea revisar?</h1>
          <figure>
            <img src="../public/escudoSanJose.svg" className="imgLogoSJ" />
          </figure>
          <button type="button" className="btnCuestEstu">
            <img src="../public/Cuestionario.svg" className="imgCuestEstu" />
            <p>Cuestionario a estudiantes</p>
          </button>
          <button type="button" className="btnCuestProf">
            <img src="../public/profesor.svg" className="imgCuestProf" />
            <p>Cuestionario a profesores</p>
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
