/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null) return null;

    let less = null;
    let lessTail = null;
    let more = null;
    let moreTail = null;

    let current = head;

    while (current !== null) {
        let node = new ListNode(current.val, null);

        if (current.val < x) {
            if (less === null) {
                less = new ListNode(current.val, null);
                lessTail = less;
            } else {
                lessTail.next = node;
                lessTail = node;
            }
        } else {
            if (more === null) {
                more = new ListNode(current.val, null);
                moreTail = more;
            } else {
                moreTail.next = node;
                moreTail = node;
            }
        }

        current = current.next;
    }

    if (less === null && more !== null) return more;

    if (less !== null && more === null) return less;

    lessTail.next = more;
    return less;
};