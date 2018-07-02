function buildHistogram (magazine) {
  let hash = {};
  magazine.forEach(letter => {
    if (hash[letter]) {
      hash[letter] += 1
    } else {
      hash[letter] = 1
    }
  })
  return hash
}

function canBuildNote(magazine, note) {
  let hash = buildHistogram(magazine)
  let result = true
  note.split("").forEach(letter => {
    if (hash[letter]) {
      hash[letter] -= 1
    } else {
      result = false
    }
  })
  return result
}
