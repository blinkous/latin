import React, { useState } from "react";
import "../styles/Decliner.css";
import DeclensionTable from "./DeclensionTable";
import declensions from "../js/declensions";
import {
  cleanUnderscoresToProper,
  toProperCase,
  checkForSpecialChars,
  cleanSpecialChars,
} from "../js/helpers";

export const Decliner = () => {
  const allDeclensions = declensions.declensions;
  const declensionOptions = Object.entries(allDeclensions).map(([key]) => key);

  const [currDeclension, setCurrDeclension] = useState(declensionOptions[0]);
  const [showDeclined, setShowDeclined] = useState(false);
  const [stem, setStem] = useState("");
  const [stemInput, setStemInput] = useState("");
  const [nominative, setNominative] = useState("");
  const [genitive, setGenitive] = useState("");

  const buildDeclinedTables = (root, declension) => (
    <DeclensionTable
      declension={allDeclensions[declension]}
      declensionName={declension}
      cases={declensions.cases}
      root={root}
      classes="decliner"
      nominative={nominative}
      tentativeRoot={genitive}
    ></DeclensionTable>
  );

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

  const handleKeyDown = (e) => {
    checkForSpecialChars(e.key) && e.preventDefault();
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");
    const cleanedText = cleanSpecialChars(pastedText);
    if (pastedText.length !== cleanedText) {
      e.preventDefault();
      e.target.value = cleanedText;
    }
  };

  const inputs = {
    nominative: handleNomChange,
    genitive: handleGenChange,
    stem: handleStemChange,
  };

  return (
    <div className="decliner">
      <form className="decliner-form">
        {Object.entries(inputs).map(([key, value_callback], index) => {
          const inputName = `${key === "stem" ? "Latin " : ""}${toProperCase(
            key
          )}${key !== "stem" ? " Case" : ""}`;
          return (
            <input
              key={index}
              type="text"
              name={`${key}_word`}
              className={`decliner-${key}-word decliner-field`}
              onChange={value_callback}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              placeholder={inputName}
              title={inputName}
            />
          );
        })}

        <p>or</p>

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
      {showDeclined && buildDeclinedTables(stem, currDeclension)}
    </div>
  );
};
