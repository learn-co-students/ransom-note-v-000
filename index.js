function buildHistogram(magazine) {
	var histogram = {};
	magazine.forEach(function(letter) {
		if (!histogram[letter]) {
			histogram[letter] = 1;
		} else {
			histogram[letter]++;
		}
	});
	return histogram;
}

function canBuildNote(magazine, note) {
	var histogram = buildHistogram(magazine),
		noteChars = note.split(''),
		canBuild = true;
	noteChars.forEach(function(char) {
		if (histogram[char]) {
			histogram[char]--;
		} else {
			canBuild = false;
			return;
		}
	});
	return canBuild;
}