function TwoNumberSum(array, targetSum) {
  // Sort the array
  array.sort((a,b) => a - b)

  // Set our pointers
  // [-1, 2, 3, 4, 5]
  //  L            R
  let left = 0
  let right = array.length - 1

  while (left < right) {
    const currentSum = array[left] + array[right]
    if (currentSum === targetSum) {
      return [array[left], array[right]]
    } else if (currentSum < targetSum) {
      // move pointer up
      // [-1, 2, 3, 4, 5]
      //      L        R
      left++
    } else if (currentSum > targetSum) {
      // move pointer down
      // [-1, 2, 3, 4, 5]
      //   L        R
      right--
    }
  } return []
  // return empty array if no match
}

/**
 * This implementation does not use additional space
 * This implementation runs in (O(n)log(n))
 * Note:  JavaScript notes that sort method can have varied time complexity
 *        For this case we'll assume best case, but worst case it can be O(n)
 */