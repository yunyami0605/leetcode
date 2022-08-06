//플로이드의 순환 탐색 알고리즘(Floyd's cycle detection algorithm)
/*
1 2 3 4 5 6 7 8 9    , 4에서 순환

flag1 : 1 속도로 이동
flag2 : 2 속도로 이동

=> 7에서 만남
flag1 이동 거리 = a + b
flag2 이동 거리 = a + b + c + b

flag1을 다시 1(head)에서 다시 시작하고
같은 1속도로 flag1, flag2를 이동시킴

=> 다시 만나는 지점이 순환지점
*/

/**
* title : 142. Linked List Cycle II
* Runtime :  94 ms, faster than 78.35%
* Memory :  44.7 MB, less than 79.98%
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let move1 = head;
  let move2 = head;

  while (move2) {
    move2 = move2?.next?.next;
    move1 = move1?.next;

    if (move2 === move1) {
      move1 = head;

      // 한 바퀴만 돌니깐 O(n) 임
      while (move1 !== move2) {
        move1 = move1.next;
        move2 = move2.next;

        if (move1 === move2) break;
      }

      return move2;
    }
  }

  return null;
};
