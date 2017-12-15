function buildHistogram(magazine) {
	let magazineHash = {}
	magazine.forEach(letter => {	
		if (magazineHash[letter] > 0) {
			magazineHash[letter]++
		} else {
			magazineHash[letter] = 1
		}
	})
	return magazineHash
}

function canBuildNote(magazine, note) {
	let magazineHash = buildHistogram(magazine)
	let noteArray = note.split('')
	let result = true
	noteArray.forEach(letter => {
		if (magazineHash[letter] > 0) {
			magazineHash[letter]--
		} else {
			result = false
		}
	})
	return result
}