/**
* title : 448. Find All Numbers Disappeared in an Array
* Runtime :  135 ms, faster than 77.33%
* Memory :  53.4 MB, less than 23.83% 
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 4 3 2 7 8 2 3 1
function findDisappearedNumbers(nums) {
  let len = nums.length;
  let tmp = [];
  //               '14', '13', '12', ''
  // Input: nums = [4,3,2,7,8,2,3,1]
  // Output: [5,6]

  // tmp : 0 0 0 0 0 0 0 0
  for (let k = 0; k < len; k++) {
    tmp.push(0);
  }
  // 1 ~ arr.length
  // tmp : 1 1 1 1 0 0 1 1
  for (let i = 0; i < len; i++) {
    tmp[nums[i] - 1]++;
  }

  let count = 0;
  let result = [];
  for (let j = 0; j < len; j++) {
    if (tmp[j] === 0) result.push(j + 1);
  }

  return result;
}
