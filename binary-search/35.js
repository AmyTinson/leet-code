// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:

// Input: nums = [1], target = 0
// Output: 0

 

// Constraints:

//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums contains distinct values sorted in ascending order.
//     -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  // check the range of values inside of the array
  const lowestValue = nums[0]
  const highestValue = nums[nums.length - 1]
  
  // compare the target value to the values inside the array
  
  // if target is less than the least value, it goes at beginning of array
  if (target < lowestValue) {
      return 0
  }
  
  // if target is more than the most value, it goes at the end of the array
  if (target > highestValue) {
      return nums.length
  }
  
  // check if target is in the array
  for (i=0; i <= nums.length; i++) {
      if(target === nums[i]) {
          return nums.indexOf(target)
      } else if (target > nums[i] && target < nums[i+1]) {
          return i+1
      }
  }

};