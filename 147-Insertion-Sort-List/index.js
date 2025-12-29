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
var insertionSortList = function(head) {
    let pseudoHead = null;
    let current = head;

    pseudoHead = new ListNode(current.val, null);

    current = current.next;

    while (current !== null) {
        let pre = null;
        let pseudoCurrent = pseudoHead;
        let node = new ListNode(current.val, null);

        while (pseudoCurrent !== null && current.val >= pseudoCurrent.val) {
            pre = pseudoCurrent
            pseudoCurrent = pseudoCurrent.next;
        }

        if (pre === null) {
            node.next = pseudoHead;
            pseudoHead = node;
        } else {
            pre.next = node;
            node.next = pseudoCurrent
        }

        current = current.next;
    }

    return pseudoHead;
};