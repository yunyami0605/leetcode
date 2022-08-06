/**
* title : 19. Remove Nth Node From End of List
* Runtime :  68 ms, faster than 90.75%
* Memory :  42.5 MB, less than 72.12%
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let preNode = head;
  let targetNode = head;
  let nextNode = head;

  let len = 0;

  // cal node list lengh
  while (targetNode) {
    targetNode = targetNode.next;
    len++;
  }

  // 앞에 노드만 제거할 시,
  if (len - n === 0) {
    return head.next;
  }

  targetNode = head;

  // n이 가리키는 노드로 이동
  for (let i = 0; i < len - n; i++) {
    preNode = targetNode;
    targetNode = targetNode.next;
  }

  nextNode = targetNode.next;
  preNode.next = nextNode;

  return head;
};

/*
  let fast = head;
  let slow = head;
  
  for(let i=0; i< n; i++){
    fast = fast.next;
  }
  
  if(!fast) return head.next;
  
  while(fast.next){
    fast = fast.next;
    slow = slow.next;
  }
  
  slow.next = slow.next.next;
  
  return head;
*/
