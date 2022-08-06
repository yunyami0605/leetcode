/**
* title : 206. Reverse Linked List
* Runtime :  
* Memory :  
* Description: 
    
* Constraints: 
    
* example
    
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
  let targetNode = head;

  // 1 2 3 4 5
  while (targetNode?.next) {
    let tmp = targetNode.next; // 2

    // 다음 노드 참조값에 다다음 노드 참조값을 넣는다. => head: 1 3 4 5
    targetNode.next = targetNode.next.next;

    // 저장했던 tmp 노드의 next를 헤드로 설정한다. => tmp: 2 1 3 4 5 / head : 1 3 4 5
    tmp.next = head;

    // head를 재정의 => 2 1 3 4 5
    head = tmp;
  }

  return head;
};
