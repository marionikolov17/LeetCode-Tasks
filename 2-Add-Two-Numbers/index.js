/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head;
    let tail;
    let additional = 0;

    let currentElement1 = l1;
    let currentElement2 = l2;

    while (currentElement1 || currentElement2) {
        const val1 = currentElement1 === null ? 0 : currentElement1.val;
        const val2 = currentElement2 === null ? 0 : currentElement2.val;
        let result = val1 + val2 + additional;

        if (result >= 10) {
            result -= 10;
            additional = 1;
        } else {
            additional = 0;
        }

        const node = new ListNode(result);

        if (head === undefined) {
            head = node;
            tail = head;
        } else {
            tail.next = node;
            tail = node;
        }

        if (currentElement1 !== null) currentElement1 = currentElement1.next;
        if (currentElement2 !== null) currentElement2 = currentElement2.next;
    }

    if (additional === 1) {
        const extraNode = new ListNode(additional);
        tail.next = extraNode;
        tail = extraNode;
    }

    return head;
};