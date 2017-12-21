function buildHistogram(magazine) {
  let magazineHistogram = {}
  magazine.forEach(i => {
    (magazineHistogram[i]) ? magazineHistogram[i]++ : magazineHistogram[i] = 1
  })
  return magazineHistogram
}

function canBuildNote(magazine, note) {
  let magazineHistogram = buildHistogram(magazine)
  let buildable = true
  let noteSplit = note.split('')
  noteSplit.forEach(i => {
    (magazineHistogram[i] > 0) ? magazineHistogram[i]-- : buildable = false
  })
  return buildable
}
