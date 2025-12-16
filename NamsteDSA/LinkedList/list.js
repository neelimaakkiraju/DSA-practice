// linked list creation

function Node(val){
    this.val = val;
    this.next = null;
}


// linked list initialization

function myList(){
    this.head = null;
    this.size = 0
}

MyLinkedList.prototype.get = function(index) {
    
};


MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode
    this.size++
};

MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head === null){
        this.head = newNode
    }else{
        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next
        }
        curr.next = newNode
    }
};