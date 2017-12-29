function buildHistogram(arr) {
  const histogram = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]
    histogram[key] = (histogram[key] || 0) + 1;
  }
  return histogram;
}

function canBuildNote(magazine, note) {
  const histogram = buildHistogram(magazine);
  const noteArray = note.split("");
  for (let i = 0; i < noteArray.length; i++) {
    const c = noteArray[i];
    if (!!histogram[c]) {
      histogram[c] = histogram[c] - 1;
    } else {
      return false;
    }
  }
  return true;
}
