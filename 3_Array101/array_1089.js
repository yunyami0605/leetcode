/**
* title : 1089. Duplicate Zeros
* Runtime :  109 ms, faster than 53.85% of JavaScript
* Memory :  44.4 MB, less than 34.62% of JavaScript
* Description: 
  Given a fixed-length integer array arr, 
  duplicate each occurrence of zero, shifting the remaining elements to the right.

  Note that elements beyond the length of the original array are not written. 
  Do the above modifications to the input array in place and do not return anything.

* Constraints: 
  1 <= arr.length <= 104
  0 <= arr[i] <= 9

* example
  Input: arr = [1,0,2,3,0,4,5,0]
  Output: [1,0,0,2,3,0,0,4]
  Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
  
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const len = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
};
