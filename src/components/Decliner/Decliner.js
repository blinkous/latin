import React, { useState } from "react";
import "../styles/Decliner.css";
import declensions from "../../js/declensions";
import { cleanUnderscoresToProper } from "../../js/helpers";
import DeclinerInput from "./DeclinerInput";
import DeclinedTable from "./DeclinedTable";
import DeclensionTable from "../DeclensionTable";

export const Decliner = () => {
  const allDeclensions = declensions.declensions;
  const declensionOptions = Object.entries(allDeclensions).map(([key]) => key);

  const [currDeclension, setCurrDeclension] = useState(declensionOptions[0]);
  const [showDeclined, setShowDeclined] = useState(false);
  const [stem, setStem] = useState("");
  const [stemInput, setStemInput] = useState("");
  const [nominative, setNominative] = useState("");
  const [genitive, setGenitive] = useState("");

  const handleDeclChange = (e) => {
    setCurrDeclension(e.target.value);
    console.log(e.target.value, currDeclension);
    stemInput === "" && setStemFromGen(genitive);
  };

  const handleStemChange = (e) => {
    const val = e.target.value;
    showDeclined !== true && setShowDeclined(true);
    setStem(val);
    setStemInput(val);
    val === "" && genitive !== "" && setStemFromGen(genitive);
  };

  const handleNomChange = (e) => {
    setNominative(e.target.value);
  };

  const handleGenChange = (e) => {
    const val = e.target.value;
    setGenitive(val);
    setStemFromGen(val);
    showDeclined !== true && setShowDeclined(true);
  };

  const setStemFromGen = (genCase) => {
    const newStem = findStem(genCase);
    if (newStem !== undefined) {
      setStem(newStem);
    } else {
      setStem(stemInput);
    }
  };

  /* Given a latin word in genitive form, find the stem */
  const findStem = (genForm) => {
    const genEnding = allDeclensions[currDeclension].genitive;
    const regexSingular = new RegExp(`${genEnding.singular}$`, "i");
    const regexPlural = new RegExp(`${genEnding.plural}$`, "i");

    if (regexSingular.test(genForm)) {
      return genForm.replace(regexSingular, "");
    } else if (regexPlural.test(genForm)) {
      return genForm.replace(regexPlural, "");
    }
  };

  return (
    <div className="decliner">
      <form className="decliner-form">
        <DeclinerInput
          name="nominative"
          onChange={handleNomChange}
        ></DeclinerInput>
        <DeclinerInput
          name="genitive"
          onChange={handleGenChange}
        ></DeclinerInput>
        <p>or</p>
        <DeclinerInput name="stem" onChange={handleStemChange}></DeclinerInput>

        <select
          name="declension_select"
          className="decliner-declension-select decliner-field"
          onChange={handleDeclChange}
        >
          {declensionOptions.map((el, index) => (
            <option value={el} key={index}>
              {cleanUnderscoresToProper(el)}
            </option>
          ))}
        </select>
      </form>

      {showDeclined && (
        <DeclensionTable
          declension={allDeclensions[currDeclension]}
          declensionName={currDeclension}
          cases={declensions.cases}
          root={stem}
          classes="decliner"
          nominative={nominative}
          tentativeRoot={genitive}
        ></DeclensionTable>
        // <DeclinedTable
        //   stem={stem}
        //   declension={currDeclension}
        //   nominative={nominative}
        //   genitive={genitive}
        // ></DeclinedTable>
      )}
    </div>
  );
};
