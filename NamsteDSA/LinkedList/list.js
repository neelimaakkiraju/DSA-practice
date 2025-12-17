// LinkedList design


var MyLinkedList = function(val) {
    this.val = val;
    this.next = null
};

var MyLinkedList = function(){
    this.head = null;
    this.size = 0

}

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


MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    if(index === 0 ){
        this.addAtHead(val);
        return
    }
    else if (index === this.size){
          this.addAtTail(val)
          return
    }
    else{
        let curr = this.head;
        for(let i =0; i<index-1;i++){
            curr= curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode
    }
    this.size++
};