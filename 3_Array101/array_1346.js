/**
* title : 1346. Check If N and Its Double Exist
* Runtime :  85 ms, faster than 68.66% of JavaScript
* Memory :  42.2 MB, less than 86.48%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j] / 2 || arr[i] === arr[j] * 2) {
        return true;
      }
    }
  }

  return false;
};
