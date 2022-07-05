/**
 * title : 1480. Running Sum of 1d Array
 * Runtime : 80 ms
 * Memory : 42.4 MB
 * Description: 
    Given an array nums.
    We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

 * Constraints: 
    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6

 * input
    [1,2,3,4]
    [1,1,1,1,1]
    [3,1,2,10,1]

 * expected
    [1,3,6,10]
    [1,2,3,4,5]
    [3,4,6,16,17]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var func = function (nums) {
  const len = nums.length;
  const result = [];

  let curSum = 0;
  for (let i = 0; i < len; i++) {
    curSum += nums[i];
    result.push(curSum);
  }

  return result;
};

console.log(func([1, 2, 3, 4]));
