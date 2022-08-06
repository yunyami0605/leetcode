/**
* title : 707. Design Linked List
* Runtime :  
* Memory :  
* Description: 
    
* Constraints: 
    
* example
    
*/

function ObjectShow(tmp) {
  if (tmp instanceof MyLinkedList) {
    let result = "";
    let curNode = tmp.head;
    let len = tmp?.len;

    for (let i = 0; i < len; i++) {
      result += `${curNode.val} `;

      curNode = curNode.next;
    }

    console.log(result);
  }
}

var Node = function (_val) {
  this.val = _val;
  this.next = null;
};

var MyLinkedList = function (node) {
  this.head = node;
  this.len = 0;
};

MyLinkedList.prototype.getNode = function (index) {
  if (this.len < index) return;
  let curNode = this.head;

  for (let i = 0; i < index; i++) {
    curNode = curNode.next;
  }

  return curNode;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  const node = this.getNode(index);
  return node?.val === undefined ? -1 : node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);

  let curNode = this.head; // 기존 헤드 노드 참조값 저장

  this.head = node; // 헤드에 새 노드 참조를 넣음
  this.head.next = curNode; // 새 노드(현  헤드) 다음에 이전 헤드를 넣음
  this.len++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);

  if (this.len === 0) {
    this.head = node;
    this.len++;
    return;
  }

  let targetNode = this.getNode(this.len - 1);

  targetNode.next = node;
  this.len++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
// targetNode는 index가 가리키는 노드를 의미
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) return this.addAtHead(val);

  let preNode = this.getNode(index - 1); // index가 가리킨 노드의 앞 노드
  if (!preNode) return; // 앞 노드가 없을 경우 => x

  let node = new Node(val);

  let targetNode = preNode.next; // index가 가리킨 노드의 참조값을 저장
  preNode.next = node; // 앞 노드의 next에 새로 생성한 노드의 참조값을 추가
  node.next = targetNode; // 새로 생긴 노드의 next에 index가 가리킨 노드를 연결
  this.len++;
};

/**
 * @param {number} index
 * @return {void}
 */
// targetNode는 index가 가리키는 노드를 의미
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.len) return; // 길이 이상의 노드를 지울 경우 => x
  if (index === 0) {
    this.head = this.head.next;
    this.len--;
    return;
  }

  let preNode = this.getNode(index - 1); // 지울 노드의 앞 노드

  if (!preNode) return;
  let targetNode = preNode.next; // 지울 노드
  let nextNode = targetNode?.next; // 지울 노드의 다음 노드

  preNode.next = nextNode;

  this.len--;
};

var obj = new MyLinkedList();

console.log("");
console.log("[ RESULT START }");
console.log("");

// obj.addAtHead(6);
obj.addAtHead(0);
ObjectShow(obj);

obj.addAtIndex(1, 1);
ObjectShow(obj);

obj.addAtHead(4);
ObjectShow(obj);

obj.addAtHead(4);
ObjectShow(obj);

console.log(obj.get(2));

obj.get(3);

// ObjectShow(obj);

console.log("");
console.log("[ RESULT END }");
console.log("");

// Input: [
//   "MyLinkedList",
//   "addAtHead",
//   "addAtIndex",
//   "get",
//   "addAtHead",

//   "get",
//   "addAtHead",
//   "get",
//   "get",
//   "addAtIndex",
//   "addAtTail",
//   "addAtHead",
// ][([], [0], [1, 1], [2], [4],  [2], [4],  [2], [3], [1, 6], [1], [0])];

// 4 4 0 1
// Output: [null, null, null, -1, null, 1, null, -1, 1, null, null, null];
// Expected: [null, null, null, -1, null, 1, null, 0, 1, null, null, null];
