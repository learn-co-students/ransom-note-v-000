function binaryMatch(magazine) {
  let hash = {};
  for (let letter of magazine) {
    !hash[letter] ? hash[letter] = 1 : hash[letter] += 1
  }
  return hash;
}

function buildHistogram(magazine) {
  return binaryMatch(magazine);
}

function canBuildNote(magazine, note) {
  let noteArray = note.trim().split("").filter(el => el !== " "),
      magazineObj = buildHistogram(magazine),
      noteObj = buildHistogram(note),
      keys = Object.keys(noteObj);
  for (let key of keys) {
    if (!magazineObj[key] || magazineObj[key] < noteObj[key]) {
      return false;
    }
  }
  return true;
}
