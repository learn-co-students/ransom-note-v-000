function buildHistogram(magazine) {
  let histogram = {};

  magazine.forEach(letter => {
    histogram[letter] ? histogram[letter]++ : histogram[letter] = 1;
  });

  return histogram;
}

function canBuildNote(magazine, note, histogram) {
  if (note.length === 0) return true;

  histogram = histogram || buildHistogram(magazine);

  if (!histogram[note[0]]) return false;

  histogram[note[0]]--;
  return canBuildNote(magazine, note.slice(1), histogram);
}
