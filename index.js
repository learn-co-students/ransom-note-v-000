function buildHistogram(magazine) {
    let histogram = {};

    for (let letter of magazine) {
      if (histogram[letter]) {
        histogram[letter] = histogram[letter] + 1;
      } else {
        histogram[letter] = 1;
      }
    }

    return histogram;
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine);

  for (let letter of note) {
    if (histogram[letter] > 0) {
      histogram[letter] = histogram[letter] - 1;
    } else {
      return false;
    }
  }

  return true;
}