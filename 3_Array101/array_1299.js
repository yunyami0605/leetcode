/**
* title : 1299. Replace Elements with Greatest Element on Right Side
* Runtime :  79 ms, faster than 98.28%
* Memory :  45.6 MB, less than 50.00%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  //     let max = -1;
  //     for(let i=0; i< arr.length; i++){
  //         for(let k=i + 1; k<arr.length; k++){
  //           if(arr[k] > max) max = arr[k];
  //         }

  //       arr[i] = max;
  //       max = -1;
  //     }

  //     return arr;

  let max = -1;
  /*
      [17,18,5,4,6,1]
      [18,6,6,6,1,-1]
      */
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i + 1]) {
      // 1
      let tmp = max;
      max = Math.max(max, arr[i]);
      arr[i] = tmp;
    } else {
      max = arr[i];

      arr[i] = -1;
    }
  }

  return arr;
};
