/**
* title : 876. Middle of the Linked List
* Runtime :  94 ms, faster than 36.24%
* Memory :  42.8 MB, less than 6.31%
* Description: 
    Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.

* Constraints: 
    
* example
    Input: head = [1,2,3,4,5]
    Output: [3,4,5]
    Explanation: The middle node of the list is node 3.

    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]
    Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let tmp = head.next;
  let i = 0;
  while (tmp) {
    i += 1;
    tmp = tmp.next;
  }

  tmp = head;
  const indexDevide2 = parseInt(i / 2);
  const remainDevide2 = i / 2 - indexDevide2;

  const index = i / 2 + remainDevide2;

  for (let k = 0; k < index; k++) {
    tmp = tmp.next;
  }

  return tmp;
};
