/**
* title : 206. Reverse Linked List
* Runtime :  70 ms, faster than 89.29%
* Memory :  44.2 MB, less than 63.22%
* Description: 
  Given the head of a singly linked list, reverse the list, and return the reversed list.
* Constraints: 
  
* example
  - 1
  Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]

  - 2
  Input: head = []
  Output: []
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
var reverseList = function (head) {
  if (!head) return head;
  let preNode = head;
  let targetNode = preNode.next;

  preNode.next = null;

  while (targetNode) {
    let tmpNode = targetNode.next;
    targetNode.next = preNode;

    preNode = targetNode;
    targetNode = tmpNode;
  }

  return preNode;
};
