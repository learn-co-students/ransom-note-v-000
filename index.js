function buildHistogram(magazine) {
  const histogram = {};
  
  magazine.forEach(l => {
    if (histogram[l]) {
      histogram[l]++;
    } else {
      histogram[l] = 1;
    }
  });
  
  return histogram;
}

function canBuildNote(magazine, note) {
  const histogram = buildHistogram(magazine);
  return note.split('').every(l => {
    if (histogram[l] > 0) {
      histogram[l]--;
      return true;
    } else {
      return false;
    }
  })
}