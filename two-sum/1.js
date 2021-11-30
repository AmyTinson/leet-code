// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

 

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
  // Create an object to contain the key-value pairs of the element and its index
  numsIndexes = {}
  
  // Iterate through the array
  for (let i=0; i < nums.length; i++) {
      // Compute current difference
      let currentDifference = target - nums[i]
      // If current difference exists in hash table and current element index !== hashTable[currentDifference], return the indices
      if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
          return [i, numsIndexes[currentDifference]]
      } else {
          // if current difference does not exist, or the indices of both elements are equal, move onto next element
          numsIndexes[nums[i]] = i
      }
  }
}