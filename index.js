function binaryMatch(magazineHistogram, letter) {
   if (letter in magazineHistogram) { true }
}

function buildHistogram(sortedMagazine) {
  let magazineHistogram = {}
  for (let i = 0; i < sortedMagazine.length; i++) {
    if (sortedMagazine[i] in magazineHistogram) {
      magazineHistogram[sortedMagazine[i]] += 1;
    } else {
      magazineHistogram[sortedMagazine[i]] = 1;
    }
  }
  return magazineHistogram
}

function canBuildNote(magazine, note) {
  let magazineHistogram = buildHistogram(magazine)

  for (let letter of note) {
    if (magazineHistogram[letter] > 0) {
      magazineHistogram[letter] --;
    } else {
      return false
    }
  }
  return true
}
