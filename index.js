function binaryMatch(mag) {
  let histogram = {}

  for (let i = 0; i<mag.length; i++){
    let letter = String(mag[i])
    if (!histogram[letter]) {
      histogram[letter] = 1
    } else {
      histogram[letter] += 1
    }
  }

  return histogram
}

// This works when I run on my own, but test says there's an error.
// function binaryMatch(mag) {
//   let histogram = {}
//
//   for (let i = 0; i<mag.length; i++){
//     if (!histogram[mag[i]]) {
//       histogram[mag[i]] = 1
//     } else {
//       histogram[mag[i]] += 1
//     }
//   }
//
//   return histogram
// }

function buildHistogram(mag){

}
