//find the duplicate number in array

//brute force

 function findDuplicate(arr){
    for(let i=0; i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                return arr[i]
            }
        }
    }
 }

 console.log(findDuplicate([1,3,4,2,2]))

 //using linked list


var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let slow2 = nums[0];

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;    
};