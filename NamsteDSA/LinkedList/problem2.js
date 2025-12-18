// ---------- ListNode definition ----------
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// ---------- Convert Array → Linked List ----------
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let value of arr) {
    curr.next = new ListNode(value);
    curr = curr.next;
  }

  return dummy.next;
}

// ---------- Reverse Linked List ----------
var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let temp = curr.next; // store next node
    curr.next = prev;     // reverse link
    prev = curr;          // move prev forward
    curr = temp;          // move curr forward
  }

  return prev;
};

// ---------- Convert Linked List → Array (for output) ----------
function linkedListToArray(head) {
  let result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

// ---------- Test in VS Code ----------
const head = arrayToLinkedList([4, 5, 6, 7, 8, 9]);
const reversedHead = reverseList(head);

console.log(linkedListToArray(reversedHead));
