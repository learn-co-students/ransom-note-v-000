function buildHistogram(array) {
  let histogram = {}
  array.forEach(function(element) {
    if (histogram[element]) {
      histogram[element] += 1
    } else {
      histogram[element] = 1
    }
  })
  return histogram
}

function canBuildNote(array, note) {
  let histogram = buildHistogram(array)
  const noteArray = note.split('')
  let answer = true
  noteArray.forEach(function(element) {
    if (histogram[element] > 0) {
      histogram[element] = histogram[element] - 1
    } else {
      answer = false
    }
  })
  return answer
}
