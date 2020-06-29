import React from "react";
import "../styles/DeclensionTable.css";

const DeclensionTable = (props) => {
  const { declension, declensionName, cases } = props;

  return (
    <table
      className={`declension-table ${declensionName} ${props.classes || ""}`}
    >
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
            <th className={`case ${key}`}>
              {key}
              <span className="use-cases">{cases[key].use}</span>
            </th>
            <td className={`declination singular ${value.singular}`}>
              <span className="root-word">{props.root && props.root}</span>
              {value.singular}
            </td>
            <td className={`declination plural ${value.plural}`}>
              <span className="root-word">{props.root && props.root}</span>
              {value.plural}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DeclensionTable;
