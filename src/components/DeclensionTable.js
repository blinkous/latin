import React from "react";
import "../styles/DeclensionTable.css";
import declensions from "../js/declensions";

const DeclensionTable = (props) => {
  const allDeclensions = declensions.declensions;
  return (
    <>
      {Object.entries(allDeclensions).map(([key, value], index) => (
        <table key={index} className={`declension-table ${key}`}>
          <caption className={`${key}-caption declension-table-title`}>
            {key
              .replace(/_/g, " ")
              .replace(/^[a-z]|\s\w/g, (match) => match.toUpperCase())}
          </caption>
          <colgroup>
            <col className="case-column" />
            <col className="singular-column" />
            <col className="plural-column" />
          </colgroup>
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
                <th className={`case ${key}`}>{key}</th>
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
