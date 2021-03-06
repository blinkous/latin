import React, { useState } from "react";
import "../styles/App.css";
import DeclensionTable from "./DeclensionTable";
import Decliner from "./Decliner";
import { declensions, declension_info } from "../js/declensions";

const App = () => {
  const [isName, setIsName] = useState(false);
  const [didScroll, setDidScroll] = useState(false);

  const handleClick = () => {
    setIsName(() => !isName);
  };

  const handleScroll = () => {
    if (!didScroll) {
      setDidScroll(() => !didScroll);
    }
  };

  return (
    <section id="home">
      <header className="header">
        <h2 className="heading">Latin Declensions</h2>
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
                The <em>red</em> balloon. The <em>melodic</em> sounds. The grass
                is <em>green</em> here.
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

      <div className="is-name-container">
        Declining Name
        <div
          className={`slider ${isName ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="slider-dot"></div>
        </div>
      </div>

      <Decliner isName={isName}></Decliner>
      <div className="ref-tables" onScroll={handleScroll}>
        <h3 className="heading">Declension Tables</h3>
        <div className="tables-container">
          {Object.entries(declensions).map(([key, value], index) => (
            <DeclensionTable
              declension={value}
              declensionName={key}
              key={index}
              cases={declension_info.cases}
              isName={isName}
            ></DeclensionTable>
          ))}
        </div>
        <div className={`scroll-prompt ${didScroll ? "hide" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
            className="arrow"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default App;
