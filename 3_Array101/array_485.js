/**
* title : 485. Max Consecutive Ones
* Runtime :  
* Memory :  
* Description: 
    Given a binary array nums, return the maximum number of consecutive 1's in the array.

* Constraints: 
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.

* example
    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

    Input: nums = [1,0,1,1,0,1]
    Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      if (res < count) {
        res = count;
      }
      count = 0;
    }

    if (nums[i] === 1) count++;
  }

  if (res < count) res = count;
  return res;
};
