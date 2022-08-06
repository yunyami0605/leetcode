/**
* title : 88. Merge Sorted Array
* Runtime :  
* Memory :  
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
*/
var merge = function (nums1, m, nums2, n) {
  var n1 = m - 1; // 2
  var n2 = n - 1; // 2
  var n3 = m + n - 1; // 5
  for (; n2 >= 0; ) {
    if (n1 >= 0 && nums1[n1] > nums2[n2]) {
      nums1[n3--] = nums1[n1--];
    } else {
      nums1[n3--] = nums2[n2--];
    }
  }
};
