function buildHistogram(magazine) {
  let histogram = {}
  magazine.forEach(letter => {
    histogram[letter] = histogram[letter] + 1 || 1
  })
  return histogram
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine)
  for (let i = 0; i < note.length; i++) {
    if (histogram[note[i]] > 0) histogram[note[i]]--
    else return false
  }
  return true
}
