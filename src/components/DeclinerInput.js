import React from "react";
import {
  toProperCase,
  checkForSpecialChars,
  cleanSpecialChars,
} from "../js/helpers";

const DeclinerInput = ({ name, onChange }) => {
  const cleanName = `${name === "stem" ? "Latin " : ""}${toProperCase(name)}${
    name !== "stem" ? " Case" : ""
  }`;

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

  return (
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
  );
};

export default DeclinerInput;
