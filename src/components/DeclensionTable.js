import React from "react";
import "../styles/DeclensionTable.css";

const DeclensionTable = (props) => {
  const { declension, declensionName } = props;

  return (
    <table className={`declension-table ${declensionName}`}>
      <caption className={`${declensionName}-caption declension-table-title`}>
        {
          declensionName
            .replace(/_/g, " ") // replace all underscores with spaces
            .replace(/^[a-z]|\s\w/g, (match) => match.toUpperCase()) //make every word uppercase
        }
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
        {Object.entries(declension).map(([key, value], index) => (
          <tr className={key} key={index}>
            <th className={`case ${key}`}>{key}</th>
            <td className={`singular ${value.singular}`}>{value.singular}</td>
            <td className={`plural ${value.plural}`}>{value.plural}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DeclensionTable;
