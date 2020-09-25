function buildHistogram(magazine) {
    let magazineHistogram = {};
  
    for (let letter of magazine) {
      if (magazineHistogram[letter]) {
        magazineHistogram[letter]++;
      } else {
        magazineHistogram[letter] = 1;
      }
    }
  
    return magazineHistogram;
  }
  
  function canBuildNote(magazine, note) {
    let histogram = buildHistogram(magazine);
  
    for (let letter of note) {
      if (histogram[letter] > 0) {
        histogram[letter]--;
      } else {
        return false
      }
    }
  
    return true
}