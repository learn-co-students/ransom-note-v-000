//1 build histogram of all the letters in the magazine and store it in a hash
//2 build histogram of all letters in the note and store in hash
//3 go through each key in the note histogram and look up it the magazine historgram
//4 if note histogram > magazine histogram
  //return false
  //else return true

  function buildHistogram(text) {
    let output = {}
    console.log(text)
    text.forEach(function(letter) {
      if (!output[letter]) {
        output[letter] = 0
      }
      output[letter]++
    })
    return output
  }

  function canBuildNote(magazine, note) {
    let magazineHistogram = buildHistogram(magazine)
    let noteHistogram = buildHistogram(note.split(''))

    for (let key in noteHistogram) {
      if (noteHistogram[key] > magazineHistogram[key] || magazineHistogram[key] == undefined) {
        return false
      }
    }
    return true
  }
