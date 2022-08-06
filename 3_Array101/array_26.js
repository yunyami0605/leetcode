/**
* title : 26. Remove Duplicates from Sorted Array
* Runtime :  96 ms, faster than 78.51% of JavaScript
* Memory :  44 MB, less than 98.50% of JavaScript
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = 0; //O(1)
  for (i = 0; i < nums.length; i++) {
    //O(n)
    if (nums[i] != nums[i + 1]) {
      nums[len] = nums[i];
      len++;
    }
  }
  return len;
};
