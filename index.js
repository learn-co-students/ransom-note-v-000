
function buildHistogram(mag){
    //key value pair where key = letter in magazine and value is frequency of letter

    let hash = {}

    for (let el of mag){
      //console.log(hash)
      if(!hash[el]){ //if value of key('a') doesnt exist
        hash[el] = 1  //set key to value of 1 
      }else{
        hash[el] += 1
      }
    }
    return hash
}

function canBuildNote(mag, note){
    let hist = buildHistogram(mag) //this will give us the hash of letter in mag and its frequency

    //false if letter doesnt exist in histogram
    // false if letter in histogram doesn't have enough of the same letter
    //otherwise true

    //if letter in note is found or included in histogram
    
    for (let el of note){
        if(hist[el] > 0){
            hist[el] -= 1
        }else{
            return false
        }
    }

    return true
}

function canBuildNote (magazine, note) {
    let hist = buildHistogram(magazine)
    for (let char of note) {
      if (!hist[char]) {
        return false
      } else {
        hist[char] = hist[char] - 1
      }
    }
      return true 
  }
  