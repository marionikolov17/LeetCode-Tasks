/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length <= 1) {
        return lists[0] || null;
    };

    const middle = Math.floor(lists.length / 2);
    const left = lists.slice(0, middle);
    const right = lists.slice(middle);

    return mergeLinkedLists(
        mergeKLists(left),
        mergeKLists(right)
    )
};

function mergeLinkedLists(leftList, rightList) {
    let head, tail;

    let leftNode = leftList;
    let rightNode = rightList;

    while (leftNode || rightNode) {
        let node;

        if (leftNode === null && rightNode !== null) {
            node = new ListNode(rightNode.val);
            rightNode = rightNode.next;
        } else if (leftNode !== null && rightNode === null) {
            node = new ListNode(leftNode.val);
            leftNode = leftNode.next;
        } else {
            if (leftNode.val >= rightNode.val) {
                node = new ListNode(rightNode.val);
                rightNode = rightNode.next;
            } else {
                node = new ListNode(leftNode.val);
                leftNode = leftNode.next;
            }
        }

        if (head === undefined) {
            head = node;
            tail = head;
        } else {
            tail.next = node;
            tail = node;
        }
    }

    return head || null;
}