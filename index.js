function buildHistogram(magazine) {
  let hashMap = {}
  for (let i = 0; i < magazine.length; i++) {
    if (!hashMap[magazine[i]]) {
      hashMap[magazine[i]] = 0
    }
    hashMap[magazine[i]] += 1
  }
  return hashMap
}

function canBuildNote(magazine, note) {
  let countNote = buildHistogram(note)
  let countMagazine = buildHistogram(magazine)

  for (let letter in countNote) {
    if (countMagazine[letter] < countNote[letter] || !Object.keys(countMagazine).includes(letter)) {
      return false
    }
  }
  return true
}
