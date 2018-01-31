function buildHistogram(magazine){
  //unoptimized first
  let magHash = {}
  for (const letter of magazine) {
    if (magHash[letter]){
      magHash[letter] = magHash[letter] + 1
    }
    else {
      magHash[letter] = 1
    }
  }
  return magHash
}

function canBuildNote(magazine, note){
  let magHash = buildHistogram(magazine)

  for (const letter of note) {
    if (magHash[letter] && magHash[letter] > 0){
      magHash[letter] = magHash[letter] - 1
    }
    else {
      return false
    }
  }

  return true
}

let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
  "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
let note = "iisat"

canBuildNote(magazine, note)