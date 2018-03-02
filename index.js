function buildHistogram(magazine) {
  magazine = magazine.sort();
  let histogram = [];
  while (magazine.length > 0) {
    let char = magazine.pop();
    let firstInstance = magazine.indexOf(magazine.find(letter => letter == char))
    let magWithoutChar = magazine.slice(0, firstInstance)
    let charLength = magazine.length - magWithoutChar.length;
    let object = {};
    if (object[char] == null) {
      object[char] = charLength;
    }
    histogram.unshift(object);
    magazine = magWithoutChar;
  }
  return histogram
}
