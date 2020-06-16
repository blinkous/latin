import React from "react";
import "../styles/DeclensionTable.css";
import declensions from "../js/declensions";

const DeclensionTable = (props) => {
  // const {cases: declension} = props;
  const first = declensions.first_declension;
  return (
    <table className={props.classes || ""} id={props.id || ""}>
      <thead>
        <tr className="header">
          <th className="case">Cases</th>
          <th className="singular">Singular</th>
          <th className="plural">Plural</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(first).map(([key, value], index) => (
          <tr className={key} key={index}>
            <td className={`case ${key}`}>{key}</td>
            <td className={`singular ${value.singular}`}>{value.singular}</td>
            <td className={`plural ${value.plural}`}>{value.plural}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DeclensionTable;
