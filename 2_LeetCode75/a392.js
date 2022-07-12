/**
* title : 392. Is Subsequence
* Runtime :  89 ms
* Memory :  41.9 MB
* Description: 
    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
* Constraints: 
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.
    
* example
    - 1
    Input: s = "abc", t = "ahbgdc"
    Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let result = true;

  const s_tmp = s.split("");

  const t_tmp = t.split("");

  let j = 0;
  for (let i = 0; i < t_tmp.length; i++) {
    if (t_tmp[i] === s_tmp[j]) {
      j++;
    }
  }

  if (j !== s_tmp.length) result = false;

  return result;
};
