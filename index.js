function buildHistogram(array) {
  let histogram = {};
  array.map(el => (
    histogram[el] = histogram[el] ? histogram[el] + 1 : 1
  ));
  return histogram;
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine);

  for(let i = 0; i < note.length; i++) {
    let letter = note.charAt(i);
    if (histogram[letter] && histogram[letter] > 0) {
      histogram[letter]--;
    } else return false;
  }

  return true;
}
