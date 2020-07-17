import React, { useState } from "react";
import "../styles/Decliner.css";
import DeclensionTable from "./DeclensionTable";
import declensions from "../js/declensions";
import {
  cleanUnderscoresToProper,
  toProperCase,
  checkForSpecialChars,
  cleanSpecialChars,
  checkInput,
} from "../js/helpers";

export const Decliner = () => {
  const allDeclensions = declensions.declensions;
  const declensionOptions = Object.entries(allDeclensions).map(([key]) => key);

  const [currDeclension, setCurrDeclension] = useState(declensionOptions[0]);
  const [showDeclined, setShowDeclined] = useState(false);
  const [stem, setStem] = useState("");
  // const [nominative, setNominative] = useState("");
  // const [genitive, setGenitive] = useState("");

  const buildDeclinedTables = (root, declension) => (
    <DeclensionTable
      declension={allDeclensions[declension]}
      declensionName={declension}
      cases={declensions.cases}
      root={root}
      classes="decliner"
    ></DeclensionTable>
  );

  const handleStemChange = (e) => {
    const val = e.target.value;
    if (val !== "") {
      showDeclined !== true && setShowDeclined(true);
      setStem(val);
    }
  };

  const handleDeclChange = (e) => {
    const decl = e.target.value;
    setCurrDeclension(decl);
  };

  const handleNomChange = (e) => {
    // const val = e.target.value;
    // setNominative(val);
  };

  const handleGenChange = (e) => {
    const val = e.target.value;

    const newStem = findStem(val);
    if (newStem !== undefined) {
      setStem(newStem);
      setShowDeclined(true);
    } else {
      setStem("");
      setShowDeclined(false);
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
    /* Future add support for both special and non-special char */
  };

  const handleKeyDown = (e) => {
    const checkedInput = checkInput(e.key, e.target.value);
    if (checkedInput === true) {
      e.preventDefault();
    } else if (checkedInput !== false) {
      e.target.value = checkedInput;
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
