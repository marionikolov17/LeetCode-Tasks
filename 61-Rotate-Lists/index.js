/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null) return head;

    let start = head;
    let current = head;
    const length = countLength(head);

    if (k > length) k = k % length;

    for (let i = 0; i < k; i++) {
        while (current.next.next) {
            current = current.next;
        }

        let next = current.next;
        current.next = null;
        next.next = start;
        start = next;
        current = start;
    }

    return start;
};

var countLength = function(head) {
    let current = head;
    let length = 0;

    while (current) {
        current = current.next;
        length++;
    }

    return length;
}