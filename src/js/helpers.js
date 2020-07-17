export const cleanUnderscoresToProper = (rawString) => {
  let words = rawString.replace(/_/g, " "); // replace all underscores with spaces;
  return toProperCase(words);
};

export const toProperCase = (rawString) =>
  rawString.replace(/^[a-z]|\s\w/g, (match) => match.toUpperCase()); // make every word uppercase
