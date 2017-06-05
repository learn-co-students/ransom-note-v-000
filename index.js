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

function buildHistogramUntil(char, histogram, magazine, startingIndex) {
	var letter,
		i = startingIndex;
	for (i = startingIndex; i < magazine.length; i++) {
		letter = magazine[i];
		if (letter === char) {
			return [true, i + 1];
		} else {
			if (!histogram[letter]) {
				histogram[letter] = 1;
			} else {
				histogram[letter]++;
			}
		}
	}
	return [false, i];
}

function canBuildNote(magazine, note) {
	var histogram = {},
		noteChars = note.split(''),
		canBuild = true,
		buildResult,
		startingIndex = 0;
	noteChars.forEach(function(char) {
		if (histogram[char]) {
			histogram[char]--;
		} else {
			buildResult = buildHistogramUntil(char, histogram, magazine, startingIndex);
			canBuild = buildResult[0];
			startingIndex = buildResult[1];
			if (!canBuild) {
				return;
			}
		}
	});
	return canBuild;
}

// function canBuildNote(magazine, note) {
// 	var histogram = buildHistogram(magazine),
// 		noteChars = note.split(''),
// 		canBuild = true;
// 	noteChars.forEach(function(char) {
// 		if (histogram[char]) {
// 			histogram[char]--;
// 		} else {
// 			canBuild = false;
// 			return;
// 		}
// 	});
// 	return canBuild;
// }
