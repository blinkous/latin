import React, { useState } from "react";
import {
  toProperCase,
  checkForSpecialChars,
  cleanSpecialChars,
} from "../js/helpers";

const DeclinerInput = ({ name, onChange }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const cleanName = `${name === "stem" ? "Latin " : ""}${toProperCase(name)}${
    name !== "stem" ? " Case" : ""
  }`;

  const handleKeyDown = (e) => {
    checkForSpecialChars(e.key) && e.preventDefault();
    console.log(e.key, e.currentTarget.value);
    if (e.target.value !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");
    const cleanedText = cleanSpecialChars(pastedText);
    if (pastedText.length !== cleanedText) {
      e.preventDefault();
      e.target.value = cleanedText;
    }
  };

  return (
    <>
      <label
        htmlFor={`${name}_word`}
        className={`decliner-${name}-word label ${isEmpty ? "hide" : ""}`}
      >
        {cleanName}
      </label>
      <input
        type="text"
        name={`${name}_word`}
        className={`decliner-${name}-word decliner-field`}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        placeholder={cleanName}
        title={cleanName}
      />
    </>
  );
};

export default DeclinerInput;
