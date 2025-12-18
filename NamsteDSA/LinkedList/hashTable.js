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