/**
* title : 383. Ransom Note
* Runtime :  299 ms
* Memory :  53.2 MB
* Description: 
  Given two strings ransomNote and magazine, 
  return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.

* Constraints: 
  1 <= ransomNote.length, magazine.length <= 105
  ransomNote and magazine consist of lowercase English letters.

* example
  1
  Input: ransomNote = "a", magazine = "b"
  Output: false

  2
  Input: ransomNote = "aa", magazine = "ab"
  Output: false
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const calCount = (text) => {
  const splitList = text.split("");

  const res = {};

  for (let i = 0; i < splitList.length; i++) {
    const tmp = Object.keys(res);

    const item = splitList[i];

    if (tmp.includes(item)) {
      res[item] += 1;
    } else {
      res[item] = 1;
    }
  }

  return res;
};

var canConstruct = function (ransomNote, magazine) {
  const ransomNoteObj = calCount(ransomNote);
  const magazineObj = calCount(magazine);

  console.log(ransomNoteObj);
  console.log(magazineObj);

  let ret = true;

  const keyList = Object.keys(ransomNoteObj);

  for (let i = 0; i < keyList.length; i++) {
    const ran = ransomNoteObj[keyList[i]];

    const mag = magazineObj[keyList[i]] || 0;

    // a a  a a b
    if (mag < ran) {
      ret = false;
    }
  }

  return ret;
};

console.log(canConstruct("a", "b"));
