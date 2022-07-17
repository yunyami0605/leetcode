/**
* title : 409. Longest Palindrome
* Runtime :  122 ms, faster than 19.74%
* Memory :  44.7 MB, less than 22.92%
* Description: 
    Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

    Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
* Constraints: 
    
* example
    Input: s = "abccccdd"
    Output: 7
    Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const arr = s.split("");
  let obj = {};

  arr.forEach((val) => {
    if (!obj[val]) obj[val] = 1;
    else obj[val] += 1;
  });

  const strCountArr = Object.values(obj);

  let res = 0;
  let aloneCount = 0;
  strCountArr.forEach((val) => {
    if (aloneCount === 0 && val % 2 !== 0) aloneCount += 1;
    res += Math.floor(val / 2) * 2;
  });

  return res + aloneCount;
};
