function binaryMatch(magazine) {
  let histogramArray = [];
  const histogram = buildHistogram(magazine);

  for (x in histogram) {
    letterObj = {};
    letterObj[x] = histogram[x];
    histogramArray.push(letterObj);
  }
  return histogramArray;
}

function buildHistogram(array) {
  let histogram = {};
  array.map(y => (
    histogram[y] = histogram[y] ? histogram[y] += 1 : 1
  ));
  return histogram
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine)
  for (let x of note) {
    if (!histogram[x]) {
      return false
    } else {
      histogram[x] = histogram[x] - 1
    }
  }
  return true
}
