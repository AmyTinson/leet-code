// Difficulty: Easy

function isValidSubsequence(array, sequence) {
  // if the sequence is larger than the array, it is impossible for it to be a subsequence
	if (sequence.length > array.length) return false

	let arrayIndex = 0
	let sequenceMatchCounter = 0

	while(arrayIndex < array.length && sequenceMatchCounter < sequence.length) {
		if (array[arrayIndex] === sequence[sequenceMatchCounter]) sequenceMatchCounter++
		arrayIndex++
	}
	return sequenceMatchCounter === sequence.length
}