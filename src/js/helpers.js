export const cleanUnderscoresToProper = (rawString) =>
  rawString
    .replace(/_/g, " ") // replace all underscores with spaces
    .replace(/^[a-z]|\s\w/g, (match) => match.toUpperCase()); // make every word uppercase

export const toProperCase = (rawString) =>
  rawString.replace(/^[a-z]|\s\w/g, (match) => match.toUpperCase()); // make every word uppercase
