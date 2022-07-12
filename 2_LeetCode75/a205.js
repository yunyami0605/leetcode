/**
* title : 205. Isomorphic Strings
* Runtime :  158 ms
* Memory :  46.4 MB
* Description: 
  Given two strings s and t, determine if they are isomorphic.

  Two strings s and t are isomorphic 
  if the characters in s can be replaced to get t.

  All occurrences of a character must be replaced 
  with another character while preserving the order of characters.
  No two characters may map to the same character, 
  but a character may map to itself.

* Constraints: 
  1 <= s.length <= 5 * 104
  t.length == s.length
  s and t consist of any valid ascii character.

* example
  - 1
  Input: s = "egg", t = "add"
  Output: true
*/

/**
 * @param {string} str
 * @returns {number[]} result - digit array
 */
const stringToDigitArray = (str) => {
  const strList = str.split("");
  let strIncludeList = [];
  let result = [];

  strList.forEach((val) => {
    const tmp = strIncludeList.indexOf(val);
    if (tmp !== -1) {
      result.push(tmp);
    } else {
      result.push(strIncludeList.length);

      strIncludeList.push(val);
    }
  });

  return result;
};

/**
 * @param {number[]} a - compare element 1
 * @param {number[]} b - compare element 2
 * @returns {boolean} result
 */
const isSameArray = (a, b) => {
  let result = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return result;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sDigit = stringToDigitArray(s);
  const tDigit = stringToDigitArray(t);

  return isSameArray(sDigit, tDigit);
};
