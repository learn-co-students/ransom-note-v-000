let binaryMatch = (magazine) => {
  let letters = {};
  for (let i = 0; i < magazine.length; i++) {
    if (letters[magazine[i]]) {
      letters[magazine[i]] += 1
    } else {
    letters[magazine[i]] = 1
    }
  }
  return letters
}

let canBuildNote = (magazine, note) => {

}