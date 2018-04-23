function binaryMatch(mag_array) {
  let histogramArray = [];
  const histogram = buildHistogram(mag_array);

  for (letter in histogram) {
    letterObj = {};
    letterObj[letter] = histogram[letter];
    histogramArray.push(letterObj);
  }
  return histogramArray;
}

function buildHistogram(array) {
  let histogram = {};
  array.forEach(letter => {
    histogram[letter] = histogram[letter] ? histogram[letter] += 1 : 1;
  });
  return histogram
}

function canBuildNote(magazine, note) {
  // place letters in histogram until first letter reached, then move to next letter
  // return false if a letter can't be found in magazine
  // return true if all letters from the magazine have been placed in note

  const noteArray = note.split('').filter(l => l !== ' ');
  let histogram = {};
  let noteLetter = '';
  let magLetter = '';
  let j = 0;
  for (let i = 0; i < noteArray.length; i++) {
    // check each letter in note while building histogram from magazine
    noteLetter = noteArray[i];
    // keep going until note letter is foud in magazine and if note letter is not already in magazine with value > 0
    while (noteLetter !== magLetter && !histogram[noteLetter]) {
      // if reach the end of the magazine return false
      if (j === magazine.length) { return false }
      magLetter = magazine[j];
      histogram[magLetter] = histogram[magLetter] ? histogram[magLetter] += 1 : 1;
      j++;
    }
    // reduce the histogram mag letter by one when used and reset magLetter to account for consecutive letters in note
    histogram[noteLetter] -= 1;
    magLetter = ''
  }
  // return true if make it through note without getting to end of magazine
  return true;
}
