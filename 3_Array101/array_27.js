/**
* title : 27. Remove Element
* Runtime :  68 ms, faster than 88.22% of JavaScript
* Memory :  42.1 MB, less than 45.56% of JavaScript

* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length;
  /*
        Input: nums = [3,2,2,3], val = 3
        Output: 2, nums = [2,2]
        -1 2 2 -1
    */

  let pivot = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[pivot++] = nums[i];
    }
  }

  return pivot;
};
