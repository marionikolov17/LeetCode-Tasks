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
var reverseKGroup = function(head, k) {
    let tail = head;
    let length = 1;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    let current = head;
    let result;
    let resultTail;

    for (let i = 0; i < Math.floor(length / k); i++) {
        let newList;
        let newTail;

        for (let j = 0; j < k; j++) {
            const node = new ListNode(current.val);

            if (newList === undefined) {
                newList = node;
                newTail = newList;
            } else {
                newTail.next = node;
                newTail = node;
            }

            current = current.next;
        }

        let reversedList = reverseLinkedList(newList);
        let currentReversed = reversedList;

        while (currentReversed) {
            if (result === undefined) {
                result = new ListNode(currentReversed.val);
                resultTail = result;
            } else {
                const node = new ListNode(currentReversed.val);
                resultTail.next = node;
                resultTail = node;
            }
            currentReversed = currentReversed.next;
        }
    }

    resultTail.next = current;
    resultTail = current;

    return result;
};

var reverseLinkedList = function(head) {
    if (!head.next) {
        return head;
    }
    let first = head;
    let second = first.next;

    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    head.next = null;
    head = first;

    return head;
}