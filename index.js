const needed = {};

const canBuildNote=(magazine, note)=> {
  memo(magazine)
  for (let i = 0; i < note.length; i++) {
    if (!needed[note[i]]--)
      return false
  }
  return true
}

const memo = (magazine) => {
  for (let i = 97; i < 123; i++) {
    needed[String.fromCharCode(i)] = 0
  };
  for (let i = 0; i < magazine.length; i++) {
    needed[magazine[i]]++
  };
  return needed
};
