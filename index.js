function buildHistogram(magazine) {
  const magazineHistogram = new Object();
  magazine.forEach(letter => {
    if (letter in magazineHistogram) {
      magazineHistogram[letter]++;
    } else {
      magazineHistogram[letter] = 1;
    }
  });
  return magazineHistogram;
}

function binaryMatch(magazineHistogram, letter) {
  if (letter in magazineHistogram) {
    return true;
  } else {
    return false;
  }
}

function canBuildNote(magazine, note) {
  const letterHistogram = buildHistogram(magazine);
  const noteLetters = note.split('');
  for (let i = 0; i < noteLetters.length; i++) {
    if (binaryMatch(letterHistogram, noteLetters[i])) {
      if (letterHistogram[noteLetters[i]] > 1) {
        letterHistogram[noteLetters[i]]--;
      } else {
        delete letterHistogram[noteLetters[i]];
      }
    } else {
      return false;
    }
  }
  return true;
}
