import React, { useState } from "react";
import DeclensionTable from "./DeclensionTable";
import declensions from "../js/declensions";
import "../styles/Decliner.css";
import { cleanUnderscoresToProper, toProperCase } from "../js/helpers";

export const Decliner = () => {
  const allDeclensions = declensions.declensions;
  const declensionOptions = Object.entries(allDeclensions).map(([key]) => key);

  const [currDeclension, setCurrDeclension] = useState(declensionOptions[0]);
  const [showDeclined, setShowDeclined] = useState(false);
  const [stem, setStem] = useState("");

  const handleStemChange = ({ target }) => {
    const val = target.value;
    if (val !== "") {
      showDeclined !== true && setShowDeclined(true);
      setStem(val);
    }
  };

  const handleDeclChange = ({ target }) => {
    const decl = target.value;
    setCurrDeclension(decl);
  };

  const buildDeclinedTables = (root, declension) => (
    <DeclensionTable
      declension={allDeclensions[declension]}
      declensionName={declension}
      cases={declensions.cases}
      root={root}
      classes="decliner"
    ></DeclensionTable>
  );

  const handleNomChange = ({ target }) => {
    const val = target.value;
    if (stem === "" && val !== "") {
    }
  };

  const handleGenChange = ({ target }) => {
    const val = target.value;
    if (val !== "") {
      const newStem = findStem(val);
      if (newStem !== undefined) {
        setStem(newStem);
        showDeclined !== true && setShowDeclined(true);
      } else {
        setStem("");
      }
    }
  };

  // console.log(
  //   Object.entries(allDeclensions).map(([key, value], index) => {
  //     return {
  //       declension: key,
  //       singular: value.genitive.singular,
  //       plural: value.genitive.plural,
  //     };
  //   })
  // );

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
