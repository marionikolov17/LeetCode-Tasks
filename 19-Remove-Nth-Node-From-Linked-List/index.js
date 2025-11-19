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
var removeNthFromEnd = function(head, n) {
    let tail = head;
    let length = 1;

    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    if (length === n) {
        head = head.next;
        return head;
    }

    let result = head;

    for (let i = 1; i < length - n; i++) {
        result = result.next;
    }

    let next = result.next.next;
    result.next = next;

    return head;
};