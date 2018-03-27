
const buildHistogram = array => {
    const charMap = {};

    for(const val of array){
        charMap[val] = charMap[val] + 1 || 1;
    }

    return charMap;
}

const canBuildNote = (magazine, note) => {

    // edge cases...

    // if note length is longer than magazine length, return false
    // if either magazine or note arrays are empty, return false

    if (note.length > magazine.length || !note.length || !magazine.length) {
        return false;
    }
    
    //create hash maps for magazine and note arrays
    const magazineHash = buildHistogram(magazine),
          noteHash = buildHistogram(note);

    //iterating through note hash, checking to see if magazine has as many occurences os an note
    for (const char in noteHash){
        if (noteHash[char] > magazineHash[char] || (noteHash[char] && !magazineHash[char])){
            return false;
        }
    }

    return true;
}