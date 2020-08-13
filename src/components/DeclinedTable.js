import React from "react";
import DeclensionTable from "./DeclensionTable";
import declensions from "../js/declensions";

const DeclinedTable = ({ stem, declension, nominative, genitive }) => {
  const allDeclensions = declensions.declensions;

  return (
    <DeclensionTable
      declension={allDeclensions[declension]}
      declensionName={declension}
      cases={declensions.cases}
      root={stem}
      classes="decliner"
      nominative={nominative}
      tentativeRoot={genitive}
    ></DeclensionTable>
  );
};

export default DeclinedTable;
