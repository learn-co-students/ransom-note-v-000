function buildHistogram (arr) {
  let hist = {};
  for (let char of arr) {
    hist[`${char}`] = hist[`${char}`] + 1 || 1
  }
  return hist;
}

function canBuildNote (magazine, note) {
  let hist = buildHistogram(magazine)
  for (let char of note) {
    if (!hist[`${char}`]) {
      return false
    } else {
      hist[`${char}`] = hist[`${char}`] - 1
    }
  }
  return true
}