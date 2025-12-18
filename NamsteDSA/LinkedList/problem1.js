// find the middle in linked list

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

console.log(middleNode([3,5,6,2,3,1]))