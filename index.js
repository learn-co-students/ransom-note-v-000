function buildHistogram(magazine) {
  let outHash = {}
  for(let i = 0; i < magazine.length; i++){
    if (!!outHash[magazine[i]]){
      outHash[magazine[i]] += 1;
    }
    else {
      outHash[magazine[i]] = 1;
    }
  }
  return outHash;
}

function canBuildNote(magazine, note) {
  let hist = buildHistogram(magazine);

  for(let i = 0; i < note.length; i++){
    if(hist[note[i]] > 0){
      hist[note[i]] -= 1;
    }
    else{
      return false;
    }
  }
  return true;
}
