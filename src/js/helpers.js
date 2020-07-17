export const cleanUnderscoresToProper = (nString) => {
  let words = nString.replace(/_/g, " "); // replace all underscores with spaces;
  return toProperCase(words);
};

export const toProperCase = (nString) =>
  nString.replace(/^[a-z]|\s\w/g, (match) => match.toUpperCase()); // make every word uppercase

export const getSpecialCharsRegex = () =>
  /[.`~!@#$%^&*()\-_=+[{}\]|\\;:"'<>,?/\d\s]/;

export const checkForSpecialChars = (nString) =>
  getSpecialCharsRegex().test(nString);

export const cleanSpecialChars = (nString) => {
  const isSpecialG = new RegExp(getSpecialCharsRegex(), "g");
  return nString.replace(isSpecialG, "");
};
