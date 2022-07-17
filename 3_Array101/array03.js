/**
* title :  Squares of a Sorted Array
* Runtime :  
* Memory :  
* Description: 
    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

* Constraints: 
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

* example
    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const tmp = [];
  let preVal = 0;

  // 1 0 9 16 100
  nums.forEach((val, i) => {
    nums[i] = val ** 2;
  });

  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] < nums[minIndex]) minIndex = k;
    }

    const tmp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = tmp;
  }

  return nums;
};
