function buildHistogram(magazine) {
  let magazineHistogram = {};
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in magazineHistogram) {
      magazineHistogram[magazine[i]] += 1;
    } else {
      magazineHistogram[magazine[i]] = 1;
    }
  }
  return magazineHistogram;
}
 //console.log(buildHistogram(magazine));
 function binaryMatch(magazineHistogram, letter) {
  // if letter is found, return true and delete letter from histogram
  if (letter in magazineHistogram) {
    return true;
  }
  return false;
}
 function canBuildNote(magazine, note) {
  let letterCounts = buildHistogram(magazine);
  note = note.replace(/[^a-zA-z]/g,"");
  let note_letters = note.split("");
  for (let i = 0; i < note_letters.length; i++) {
    if (!binaryMatch(letterCounts, note_letters[i])) {
      return false;
    } else {
      if(letterCounts[note_letters[i]] == 1) {
        delete letterCounts[note_letters[i]]
      } else {
        letterCounts[note_letters[i]] --;
      }
      //console.log(letterCounts);
    }
  }
  return true;
}
 // let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// let note = "hereisat"
// console.log(canBuildNote(magazine,note));