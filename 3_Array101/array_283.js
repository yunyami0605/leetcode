/**
* title : 283. Move Zeroes
* Runtime :  126 ms, faster than 66.08%
* Memory :  46.4 MB, less than 77.16%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /*
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]
  
    */
  let flag = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[flag] = nums[i];

      if (i !== flag) nums[i] = 0;
      flag++;
    }
  }
};
