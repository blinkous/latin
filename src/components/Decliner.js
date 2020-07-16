import React, { useState } from "react";
import DeclensionTable from "./DeclensionTable";
import declensions from "../js/declensions";
import "../styles/Decliner.css";
import { cleanUnderscoresToProper } from "../js/helpers";

export const Decliner = () => {
  const [showDeclined, setShowDeclined] = useState(false);
  const [stem, setStem] = useState("");
  const [currDeclension, setCurrDeclension] = useState("first_declension");

  const allDeclensions = declensions.declensions;
  const cases = declensions.cases;
  const declensionOptions = Object.entries(allDeclensions).map(([key]) => key);

  const handleStemChange = ({ target }) => {
    const val = target.value;
    if (val !== "") {
      showDeclined !== true && setShowDeclined(true);
      setStem(val);
    }
  };

  const handleDecChange = ({ target }) => {
    const decl = target.value;
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