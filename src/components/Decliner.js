import React, { useState } from "react";
import DeclensionTable from "./DeclensionTable";
import declensions from "../js/declensions";
import "../styles/Decliner.css";

export const Decliner = () => {
  const [showDeclined, setShowDeclined] = useState(false);
  const [stem, setStem] = useState("");
  const [nominativeForm, setNominativeForm] = useState("");
  const [gentiveForm, setGentiveForm] = useState("");
  const [currDeclension, setCurrDeclension] = useState("first_declension");

  const allDeclensions = declensions.declensions;
  const cases = declensions.cases;
  const declensionOptions = [
    "First",
    "Second",
    "Neuter Second",
    "Third",
    "Neuter Third",
    "Fourth",
    "Neuter Fourth",
    "Fifth",
  ];

  const handleStemChange = (e) => {
    const val = e.target.value;
    if (val !== "") {
      setShowDeclined(true);
      setStem(val);
    }
  };

  const handleDecChange = (e) => {
    const decl = `${e.target.value}_declension`;
    setCurrDeclension(decl);
  };

  const buildDeclinedTables = (root, declension) => (
    <DeclensionTable
      declension={allDeclensions[declension]}
      declensionName={declension}
      cases={cases}
      root={root}
      classes="decliner"
    ></DeclensionTable>
  );

  const handleNomChange = (e) => {
    const val = e.target.value;
    if (stem === "") {
      if (val !== "") {
        setNominativeForm(val);
        if (gentiveForm !== "") {
          setShowDeclined(true);
        }
      }
    }
  };

  const handleGenChange = (e) => {
    const val = e.target.value;
    if (stem === "") {
      if (val !== "") {
        setGentiveForm(val);
        if (nominativeForm !== "") {
          setShowDeclined(true);
        }
      }
    }
  };

  const findStem = (nomForm, genForm) => {
    /* Future add support for both special and non-special char */
  };

  return (
    <div className="decliner">
      <form className="decliner-form">
        <input
          type="text"
          name="nominative_word"
          className="decliner-nominative-word decliner-field"
          onChange={handleNomChange}
          placeholder="Nominative Case"
          title="Nominative Case"
        />
        <input
          type="text"
          name="genitive_word"
          className="decliner-genitive-word decliner-field"
          onChange={handleGenChange}
          placeholder="Genitive Case"
          title="Genitive Case"
        />
        <p>or</p>
        <input
          type="text"
          name="stem_word"
          className="decliner-stem-word decliner-field"
          onChange={handleStemChange}
          placeholder="Latin Stem"
          title="Latin Stem"
        />
        <select
          name="declension_select"
          className="decliner-declension-select decliner-field"
          onChange={handleDecChange}
        >
          {declensionOptions.map((el, index) => (
            <option value={el.toLowerCase().replace(/\s/g, "_")} key={index}>
              {el} Declension
            </option>
          ))}
        </select>
      </form>
      {showDeclined && buildDeclinedTables(stem, currDeclension)}
    </div>
  );
};
