// remove Nth Node from Linked List

// approach1

var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let length = 0;
    let first = head;
    while (first) {
        length++;
        first = first.next;
    }
    let prev = sentinel;
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};
  

//approach 2

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
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;

    // Move first n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both until first reaches end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove nth node
    second.next = second.next.next;

    return dummy.next;
};
