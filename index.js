function buildHistogram(arr) {
  let histogram = new Map();

  arr.forEach(n => {
    histogram.get(n) ? histogram.set(n, histogram.get(n) + 1) : histogram.set(n, 1);
  });

  return histogram;
}

function canBuildNote(arr, note) {
  const magazineHistogram = buildHistogram(arr);
  const noteHistogram = buildHistogram(note.split(''));

  for (let [char, count] of noteHistogram) {
    const magCharCount = magazineHistogram.get(char) || 0;
    if (count > magCharCount) { return false; };
  }


  return true;
}
