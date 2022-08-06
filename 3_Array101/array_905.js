/**
* title : 905. Sort Array By Parity
* Runtime :  100 ms, faster than 71.55%
* Memory :  45.1 MB, less than 14.84%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  /*
    Input: nums = [3,1,2,4]
    Output: [2,4,3,1]
    */

  let odd = [];
  let even = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i]);
    }
  }

  return [...even, ...odd];
};
