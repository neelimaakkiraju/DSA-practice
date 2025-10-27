// merge 2 sorted arrays

function isSorted(arr1, arr2){

    let result = arr1.concat(arr2).sort()

    if(result.length>=0){
        return result
    }else if(result.length === 0){
       return "[]"
    }

}

console.log(isSorted([1,2,4],[1,3,4]))

//using linked list

var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach the rest (if any)
  current.next = list1 || list2;

  return dummy.next;
};
