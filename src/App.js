import React from "react";
import "./styles/App.css";
import DeclensionTable from "./components/DeclensionTable";
import declensions from "../src/js/declensions";

const App = () => {
  const allDeclensions = declensions.declensions;
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
        {Object.entries(allDeclensions).map(([key, value], index) => (
          <DeclensionTable
            declension={value}
            declensionName={key}
            key={index}
          ></DeclensionTable>
        ))}
      </section>
    </div>
  );
};

export default App;
