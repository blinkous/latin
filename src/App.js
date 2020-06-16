import React from "react";
import "./styles/App.css";
import DeclensionTable from "./components/DeclensionTable";

const App = () => {
  return (
    <div id="home">
      <h1 className="heading">Latin</h1>
      <section id="declensions">
        <header>
          <h2 className="heading">Declensions</h2>
          <p>
            The variation of a noun, pronoun, adjective or article to indicate
            grammatical case, number and gender.
          </p>
        </header>
        <DeclensionTable></DeclensionTable>
      </section>
    </div>
  );
};

export default App;
