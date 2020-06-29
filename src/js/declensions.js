/* āēīōū */
export default {
  definition:
    "The variation of a noun, pronoun, adjective or article to indicate grammatical case, number and gender.",
  cases: {
    nominative: {
      definition:
        "Case for the noun or pronoun when it is the subject of a sentence/clause. It is when it is the subject of a verb or doing the action of the verb. Derived from nomen (name).",
      use: `the _(subject)`,
    },
    genitive: {
      definition: "",
      use: `of the _ `,
    },
    dative: {
      definition: "",
      use: `to/for the _`,
    },
    accusative: {
      definition: "",
      use: `the _(object)`,
    },
    ablative: {
      definition: "",
      use: `by/with/from/in/on the _`,
    },
  },
  declensions: {
    first_declension: {
      nominative: {
        singular: "a",
        plural: "ae",
      },
      genitive: {
        singular: "ae",
        plural: "ārum",
      },
      dative: {
        singular: "ae",
        plural: "īs",
      },
      accusative: {
        singular: "am",
        plural: "ās",
      },
      ablative: {
        singular: "ā",
        plural: "īs",
      },
      vocative: {
        singular: "a",
        plural: "ae",
      },
    },
    second_declension: {
      nominative: {
        singular: "us",
        plural: "ī",
      },
      genitive: {
        singular: "ī",
        plural: "ōrum",
      },
      dative: {
        singular: "ō",
        plural: "īs",
      },
      accusative: {
        singular: "um",
        plural: "ōs",
      },
      ablative: {
        singular: "ō",
        plural: "īs",
      },
      vocative: {
        singular: "us -> e | Name end ius -> ī",
        plural: "ī",
      },
    },
    neuter_second_declension: {
      nominative: {
        singular: "um",
        plural: "a",
      },
      genitive: {
        singular: "ī",
        plural: "ōrum",
      },
      dative: {
        singular: "ō",
        plural: "īs",
      },
      accusative: {
        singular: "um",
        plural: "a",
      },
      ablative: {
        singular: "ō",
        plural: "īs",
      },
      vocative: {
        singular: "us -> e | Name end ius -> ī",
        plural: "a",
      },
    },
    third_declension: {
      nominative: {
        singular: "-",
        plural: "ēs",
      },
      genitive: {
        singular: "is",
        plural: "um",
      },
      dative: {
        singular: "ī",
        plural: "ibus",
      },
      accusative: {
        singular: "em",
        plural: "ēs",
      },
      ablative: {
        singular: "e",
        plural: "ibus",
      },
      vocative: {
        singular: "-",
        plural: "ēs",
      },
    },
    neuter_third_declension: {
      nominative: {
        singular: "-",
        plural: "a",
      },
      genitive: {
        singular: "is",
        plural: "um",
      },
      dative: {
        singular: "ī",
        plural: "ibus",
      },
      accusative: {
        singular: "-",
        plural: "a",
      },
      ablative: {
        singular: "e",
        plural: "ibus",
      },
      vocative: {
        singular: "-",
        plural: "a",
      },
    },
    fourth_declension: {
      nominative: {
        singular: "us",
        plural: "ūs",
      },
      genitive: {
        singular: "ūs",
        plural: "uum",
      },
      dative: {
        singular: "uī",
        plural: "ibus",
      },
      accusative: {
        singular: "um",
        plural: "ūs",
      },
      ablative: {
        singular: "ū",
        plural: "ibus",
      },
      vocative: {
        singular: "us",
        plural: "ūs",
      },
    },
    neuter_fourth_declension: {
      nominative: {
        singular: "ū",
        plural: "ua",
      },
      genitive: {
        singular: "ūs",
        plural: "uum",
      },
      dative: {
        singular: "u",
        plural: "ibus",
      },
      accusative: {
        singular: "ū",
        plural: "ua",
      },
      ablative: {
        singular: "ū",
        plural: "ibus",
      },
      vocative: {
        singular: "ū",
        plural: "ua",
      },
    },
    fifth_declension: {
      nominative: {
        singular: "ēs",
        plural: "ēs",
      },
      genitive: {
        singular: "eī",
        plural: "ērum",
      },
      dative: {
        singular: "eī",
        plural: "ēbum",
      },
      accusative: {
        singular: "em",
        plural: "ēs",
      },
      ablative: {
        singular: "ē",
        plural: "ēbus",
      },
      vocative: {
        singular: "ēs",
        plural: "ēs",
      },
    },
  },
};
