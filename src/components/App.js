import React from "react";
import "./styles/App.css";
import DeclensionTable from "./DeclensionTable";
import Decliner from "./Decliner";
import { declensions, declension_info } from "../js/declensions";

const App = () => {
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
        <Decliner></Decliner>
        {Object.entries(declensions).map(([key, value], index) => (
          <DeclensionTable
            declension={value}
            declensionName={key}
            key={index}
            cases={declension_info.cases}
          ></DeclensionTable>
        ))}
      </section>
    </div>
  );
};

export default App;
