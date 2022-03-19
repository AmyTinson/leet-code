// Difficulty: Easy

function sortedSquaredArray(array) {
	// need to initiate the array this way for below calculation
	let squaredArray = new Array(array.length).fill(0)
	
	let lowestValueIndex = 0 // pointer to head
	let highestValueIndex = squaredArray.length - 1 // pointer to tail
	
	// looping BACKWARDS because reasons
	for (let i = array.length - 1; i >= 0; i--) {
		const smallerValue = array[lowestValueIndex]
		const largerValue = array[highestValueIndex]
		
		// Need to check absolute values as we have potentially negative inputs
		if (Math.abs(smallerValue) > Math.abs(largerValue)) {
			squaredArray[i] = smallerValue ** 2
			lowestValueIndex++
		} else {
			squaredArray[i] = largerValue ** 2
			highestValueIndex--
		}
	}
  return squaredArray;
}
