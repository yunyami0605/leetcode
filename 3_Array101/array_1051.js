/**
* title : 1051. Height Checker
* Runtime :  89 ms, faster than 56.07%
* Memory :  42.3 MB, less than 38.67%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let count = 0;
  let heights2 = [...heights];

  for (let i = 0; i < heights2.length; i++) {
    let min = 101;
    let k = 0;

    for (let j = i; j < heights2.length; j++) {
      if (heights2[j] < min) {
        min = heights2[j];
        k = j;
      }
    }

    let tmp = heights2[i];
    heights2[i] = heights2[k];
    heights2[k] = tmp;

    if (heights[i] !== heights2[i]) count++;
  }

  return count;
};
