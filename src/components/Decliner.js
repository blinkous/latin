import React, { useState } from "react";
import DeclensionTable from "./DeclensionTable";
import declensions from "../js/declensions";
import "../styles/Decliner.css";

export const Decliner = () => {
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
    "Neuter Third",
    "Fourth",
    "Neuter Fourth",
    "Fifth",
  ];

  const handleRootChange = (e) => {
    const val = e.target.value;
    console.log(val);
    if (val !== "") {
      setShowDeclined(true);
      setRoot(val);
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

  return (
    <div className="decliner">
      <form className="decliner-form">
        <input
          type="text"
          name="root_word"
          className="decliner-root-word"
          onChange={handleRootChange}
          placeholder="Latin Stem"
        />
        <select
          name="declension_select"
          className="decliner-declension-select"
          onChange={handleDecChange}
        >
          {declensionOptions.map((el, index) => (
            <option value={el.toLowerCase().replace(/\s/g, "_")} key={index}>
              {el} Declension
            </option>
          ))}
        </select>
      </form>
      {showDeclined && buildDeclinedTables(root, currDeclension)}
    </div>
  );
};
