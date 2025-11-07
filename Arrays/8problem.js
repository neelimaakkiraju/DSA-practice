//Merge intervals


function mergeIntervals(arr){
arr.sort((a, b) => a[0] - b[0]);

  let result = [arr[0]];

  
  for (let i = 1; i < arr.length; i++) {
    let prev = result[result.length - 1];
    let current = arr[i];

   
    if (current[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))