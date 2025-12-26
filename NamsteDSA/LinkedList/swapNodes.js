// Definition for singly-linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Your solution
var swapPairs = function(head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let curr = head;
  let n = head.next;

  while (curr && n) {
    prev.next = n;
    curr.next = n.next;
    n.next = curr;

    prev = curr;
    curr = prev.next;
    n = curr && curr.next;
  }

  return dummy.next;
};

// Helper: Array → Linked List
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper: Linked List → Array
function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// ✅ TEST
let head = arrayToList([1, 2, 3, 4, 5, 6]);
let result = swapPairs(head);

console.log(listToArray(result)); 
// OUTPUT: [2, 1, 4, 3, 6, 5]
