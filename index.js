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
