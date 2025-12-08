 

function getConcatenation(nums) {
  let result = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    result[count++] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    result[count++] = nums[i];
  }

  return result;
}

console.log(getConcatenation([1,2,1]));
