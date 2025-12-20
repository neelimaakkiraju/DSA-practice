// find given linked list is intersection or not

var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    while (headB) {
        set.add(headB);
        headB = headB.next;
    }
    while (headA) {
        if (set.has(headA)) return headA;
        headA = headA.next;
    }
    return null;
};
    