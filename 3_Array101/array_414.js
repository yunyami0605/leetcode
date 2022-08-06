/**
* title : 414. Third Maximum Number
* Runtime :  91 ms, faster than 63.94%
* Memory :  44.2 MB, less than 61.24%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  /*
    -14 -2 -5  -8 -2 -3
    Input: nums = [3,2,1]
    Output: 1
    */

  // let maxList = [-(2**31) -1, -(2**31) -1, -(2**31) -1];
  //
  let maxList = [-Infinity, -Infinity, -Infinity];
  let len = nums.length;
  let maxLen = 0;

  for (let i = 0; i < len; i++) {
    if (maxList.includes(nums[i])) continue;
    maxLen++;

    if (nums[i] > maxList[0]) maxList = [nums[i], maxList[0], maxList[1]];
    else if (nums[i] > maxList[1]) maxList = [maxList[0], nums[i], maxList[1]];
    else if (nums[i] > maxList[2]) maxList = [maxList[0], maxList[1], nums[i]];
  }

  return maxList[maxLen < 3 ? 0 : 2];
};
