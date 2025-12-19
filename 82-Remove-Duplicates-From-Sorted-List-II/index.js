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
var deleteDuplicates = function(head) {
    let pre = null;
    let current = head;
    let next = current.next;

    while (current !== null && next !== null) {
        if (current.val === next.val) {
            while (current.val === next.val) {
                next = next.next;
            }

            if (pre === null) {
                head = next;
                current = head;
                next = current.next;
            } else {
                pre.next = next;
                current = pre.next;
                next = current.next;
            }
        } else {
            pre = current;
            current = current.next;
            next = next.next;
        }
    }

    return head;
};