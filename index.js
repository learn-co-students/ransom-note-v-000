function buildHistogram(magazine) {
  magazine = magazine.sort();
  let histogram = [];
  while (magazine.length > 0) {
    let char = magazine.slice(-1)[0];
    let firstInstance = magazine.indexOf(magazine.find(letter => letter == char))
    let magWithoutChar = magazine.slice(0, firstInstance)
    let charLength = magazine.length - magWithoutChar.length;
    let object = {};
    if (object[char] == null) {
      object[char] = charLength;
    }
    histogram.unshift(object);
    magazine = magWithoutChar;
  }
  return histogram;
}

function canBuildNote(magazine, note) {
  debugger;
  magazine = buildHistogram(magazine)
  note = buildHistogram(note.split(''))
  for (let i = 0; i < note.length; i++) {
    let char = Object.keys(note[i])[0];
    let magChar = magazine.indexOf(magazine.find(obj => Object.keys(obj) == char))
    let noteChar = note.indexOf(note.find(obj => Object.keys(obj) == char))
    if (!(magChar != -1 && magazine[magChar][char] >= note[noteChar][char])) {
      return false
    }
  }
  return true
}
