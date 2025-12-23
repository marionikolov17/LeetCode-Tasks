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
var sortList = function(head) {
    if (!head || !head.next) return head;

    let second = split(head);

    head = sortList(head);
    second = sortList(second);

    return merge(head, second);
};

var merge = function(first, second) {
    if (!first) return second;
    if (!second) return first;

    if (first.val < second.val) {
        first.next = merge(first.next, second);
        return first;
    } else {
        second.next = merge(second.next, first);
        return second;
    }
}

var split = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        if (fast) {
            slow = slow.next;
        }
    }

    let second = slow.next;
    slow.next = null;
    return second;
}