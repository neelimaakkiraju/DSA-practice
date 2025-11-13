// find majority number in array


// Input: arr[] = [1, 1, 2, 1, 3, 5, 1]
// Output: 1

function majorityNum(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    resultArr.push({ num: arr[i], count });
  }

  // find number with maximum count
  let maxCount = 0;
  let majority = arr[0];

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i].count > maxCount) {
      maxCount = resultArr[i].count;
      majority = resultArr[i].num;
    }
   
  }

  return majority;
}

console.log(majorityNum([1, 1, 2, 1, 3, 5, 1])); 
console.log(majorityNum([7,5])); 
