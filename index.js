function buildHistogram(string) {
  let magazineObj = {};

  string.forEach((letter) => {
    if (!magazineObj[letter]) magazineObj[letter] = 0;
    magazineObj[letter]++;
  });

  return magazineObj;
}

function canBuildNote(magazine, note) {
  let magazineObj = buildHistogram(magazine);
  let noteIsPossible = true;
  let noteArr = note.split("");

  noteArr.forEach((letter) => {
    if (magazineObj[letter]) {
      magazineObj[letter]--;
      if (magazineObj[letter] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
}
