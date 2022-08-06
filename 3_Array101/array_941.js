/**
* title : 941. Valid Mountain Array
* Runtime :  77 ms, faster than 82.40%
* Memory :  44.9 MB, less than 40.91%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let lens = arr.length;
  let count = 0;
  let curDir = 1;

  for (let i = 0; i < lens - 1; i++) {
    if (arr[i] - arr[i + 1] < 0) {
      // 오름차순
      if (curDir === -1 && i !== 0) count += 1;
      curDir = 1;
    } else if (arr[i] - arr[i + 1] > 0) {
      // 내림차순
      if (curDir === 1 && i !== 0) count += 1;
      curDir = -1;
    } else {
      // 같을 경우,
      return false;
    }

    if (count >= 2) return false;
  }

  if (curDir === 1) return false;
  return count === 1;
};
