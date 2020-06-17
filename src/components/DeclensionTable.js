import React from "react";
import "../styles/DeclensionTable.css";
import declensions from "../js/declensions";

const DeclensionTable = (props) => {
  const firstDecl = declensions.declensions.first_declension;
  const allDeclensions = declensions.declensions;

  return (
    <>
      {Object.entries(allDeclensions).map(([key, value], index) => (
        <table key={index} className={`declension-table ${key}`}>
          <caption>
            {key
              .replace(/_/g, " ")
              .replace(/^[a-z]|\s\w/g, (match) => match.toUpperCase())}
          </caption>
          <thead>
            <tr className="header">
              <th className="case">Cases</th>
              <th className="singular">Singular</th>
              <th className="plural">Plural</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(allDeclensions[key]).map(([key, value], index) => (
              <tr className={key} key={index}>
                <td className={`case ${key}`}>{key}</td>
                <td className={`singular ${value.singular}`}>
                  {value.singular}
                </td>
                <td className={`plural ${value.plural}`}>{value.plural}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
};
export default DeclensionTable;
