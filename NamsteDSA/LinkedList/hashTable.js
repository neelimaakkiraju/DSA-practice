/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let setNodes = new Set();
    let curr = head;

    while(curr){
        if(setNodes.has(curr)){
            return true
        }
        setNodes.add(curr);
        curr = curr.next;
        
    }
    return false
};


// floyd's Alogorithm

var hasCycle = function(head) {
    let slow = head;
    let fast = head.next;

    while(slow !== fast){
        if(fast === null || fast.next === null){
            return false
        }
        slow = slow.next;
        fast = fast.nent.next;
    }

    return true;
};
