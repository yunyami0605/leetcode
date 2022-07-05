/**
* title : 412. Fizz Buzz
* Runtime : 122 ms
* Memory : 44.1 MB
* Description: 
    Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

* Constraints: 
    <= n <= 104
* input
    Input: n = 3
    Input: n = 5
    Input: n = 15

* expected
    Output: ["1","2","Fizz"]
    Output: ["1","2","Fizz","4","Buzz"]
    Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = [];
  // 3 5
  for (let i = 1; i <= n; i++) {
    const divisible3 = i % 3 === 0;
    const divisible5 = i % 5 === 0;

    if (divisible3 && divisible5) {
      result.push("FizzBuzz");
    } else if (divisible3) {
      result.push("Fizz");
    } else if (divisible5) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
};
