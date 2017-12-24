/*
  1. Clarify problem:
  - do letters have to be capitalized?
  - is punctuation included?
  No to both questions
*/

function buildHistogram(arr) {
  return arr.reduce((obj, char) => {
    if (!obj[char]) {
      obj[char] = 0;
    }
    obj[char]++;
    return obj;
  }, {})
}

function canBuildNote(magazine, note) {
  magazine = buildHistogram(magazine);
  note = buildHistogram(note.split(''));
  for (let char in note) {
    if (note[char] > magazine[char] || !magazine[char]) {
      return false;
    }
  }
  return true;
}