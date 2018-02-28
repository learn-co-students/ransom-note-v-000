function buildHistogram(magazine) {
  let histogram = {}
  magazine.forEach(letter => {
    !histogram[letter] ? histogram[letter] = 1 : histogram[letter] += 1;
  })
  return histogram;
}

function canBuildNote(magazine, note) {
  let histogram = buildHistogram(magazine);
  const length = note.length;
  for (let i = 0; i < length; i++) {
    if (histogram[note[i]] && histogram[note[i]] > 0) {
      histogram[note[i]] -= 1;
      console.log(note[i]);
    } else {
      return false;
    }
  }
  return true;
}