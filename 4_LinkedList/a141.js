/**
* title : 141. Linked List Cycle
* Runtime :  84 ms, faster than 85.93%
* Memory :  45 MB, less than 52.15%
* Description: 
    
* Constraints: 
    
* example
    
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let move1 = head;
  let move2 = head;

  for (;;) {
    move2 = move2?.next?.next;
    move1 = move1?.next;

    if (!move1 || !move2) return false;
    if (move1 === move2) return true;
  }
};
