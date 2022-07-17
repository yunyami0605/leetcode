/**
* title : 589. N-ary Tree Preorder Traversal
* Runtime :  652 ms, faster than 5.01%
* Memory :  53.1 MB, less than 5.08%
* Description: 
    Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

    Nary-Tree input serialization is represented in their level order traversal.
    Each group of children is separated by the null value (See examples)

* Constraints: 
    
* example
    Input: root = [1,null,3,2,4,null,5,6]
    Output: [1,3,5,6,2,4]
*/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

function test(node, res) {
  res.push(node.val);

  if (node.children.length === 0) return;
  for (let i = 0; i < node.children.length; i++) {
    test(node.children[i], res);
  }
}
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  let res = [];

  test(root, res);

  return res;
};
