import React, { useState } from "react";
import "./styles/App.css";
import DeclensionTable from "./components/DeclensionTable";
import declensions from "../src/js/declensions";

const App = () => {
  const [showDeclined, setShowDeclined] = useState(false);
  const [root, setRoot] = useState("");
  const [currDeclension, setCurrDeclension] = useState("first_declension");

  const allDeclensions = declensions.declensions;
  const cases = declensions.cases;
  const declensionOptions = [
    "First",
    "Second",
    "Neuter Second",
    "Third",
    "Third",
    "Neuter Third",
    "Fourth",
    "Neuter Fourth",
    "Fifth",
  ];

  const handleRootChange = (e) => {
    const val = e.target.value;
    console.log(val);
    if (val !== null) {
      setShowDeclined(true);
      setRoot(val);
    }
  };
  const handleDecChange = (e) => {
    const decl = `${e.target.value}_declension`;
    setCurrDeclension(decl);
  };

  const buildDeclinedTables = (root, declension) => {
    return (
      <DeclensionTable
        declension={allDeclensions[declension]}
        declensionName={declension}
        cases={cases}
        root={root}
        classes="decliner"
      ></DeclensionTable>
    );
  };

  return (
    <div id="home">
      <h1 className="heading">Latin</h1>
      <section id="declensions">
        <header>
          <h2 className="heading">Declensions</h2>
          <p>
            The variation of a{" "}
            <span className="keyword">
              noun
              <span className="info">
                A person, place or thing.
                <span className="example">
                  Aislin, Gemma, New York, cat, audience
                </span>
              </span>
            </span>
            ,{" "}
            <span className="keyword">
              pronoun
              <span className="info">
                A word that is used instead of a noun or noun phrase
                <span className="example">
                  I, me, he, she, herself, you, it, that, they, each, few, many,
                  who, whoever, whose, someone, everybody and etc.
                </span>
              </span>
            </span>
            ,{" "}
            <span className="keyword">
              adjective
              <span className="info">
                A word or phrase that describes a noun
                <span className="example">
                  The <em>red</em> balloon. The <em>melodic</em> sounds. The
                  grass is <em>green</em> here.
                </span>
              </span>
            </span>{" "}
            or{" "}
            <span className="keyword">
              article
              <span className="info">
                Special modifiers that appear before nouns or noun phrases that
                help clarify the meaning of them.
                <span className="example">the, a/an</span>
              </span>
            </span>{" "}
            to indicate grammatical case, number and gender.
          </p>
        </header>
        <div className="decliner">
          <form>
            <input
              type="text"
              name="root_word"
              onChange={handleRootChange}
              placeholder="Latin Root Word"
            />
            <select
              name="declension_select"
              id="declension_select"
              onChange={handleDecChange}
            >
              {declensionOptions.map((el, index) => (
                <option
                  value={el.toLowerCase().replace(/\s/g, "_")}
                  key={index}
                >
                  {el} Declension
                </option>
              ))}
            </select>
          </form>
          {showDeclined && buildDeclinedTables(root, currDeclension)}
        </div>
        {Object.entries(allDeclensions).map(([key, value], index) => (
          <DeclensionTable
            declension={value}
            declensionName={key}
            key={index}
            cases={cases}
          ></DeclensionTable>
        ))}
      </section>
    </div>
  );
};

export default App;
