function canBuildNote(mag, note){
  const hist = buildHistogram(mag)
  for (let el of note){
    if (hist[el] > 0){
      hist[el]-=1
    }
    else{
      return false
    }
  }
  return true
}

function buildHistogram(mag){
  const hash = {}
  for (let el of mag){
    if (hash[el]){
      hash[el]+=1
    }
    else{
      hash[el]=1
    }
  }
  return hash
}