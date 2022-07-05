/**
* title : 1342. Number of Steps to Reduce a Number to Zero
* Runtime :  65 ms
* Memory :   42 MB
* Description: 
  Given an integer num, return the number of steps to reduce it to zero.

  In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

* Constraints: 
  0 <= num <= 106

* example
  - 1 -
  Input: num = 14
  Output: 6
  Explanation: 
  Step 1) 14 is even; divide by 2 and obtain 7. 
  Step 2) 7 is odd; subtract 1 and obtain 6.
  Step 3) 6 is even; divide by 2 and obtain 3. 
  Step 4) 3 is odd; subtract 1 and obtain 2. 
  Step 5) 2 is even; divide by 2 and obtain 1. 
  Step 6) 1 is odd; subtract 1 and obtain 0.
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let ret = 0;

  for (; num > 0; ) {
    let tmp = num % 2;

    if (tmp === 0) {
      num = num / 2;
    } else {
      num -= 1;
    }

    ret += 1;
  }
  return ret;
};
