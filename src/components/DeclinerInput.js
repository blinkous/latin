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
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setIsEmpty(false);
      onChange(e);
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
        className={`${name}-word label ${isEmpty ? "hide" : ""}`}
      >
        {cleanName}
      </label>
      <input
        type="text"
        name={`${name}_word`}
        className={`${name}-word decliner-${name}-word decliner-field`}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onChange={handleChange}
        placeholder={cleanName}
        title={cleanName}
      />
    </>
  );
};

export default DeclinerInput;
