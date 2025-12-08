// factorial of given number using recursion



function findSum(n){
   if(n===1) return 1;
   return n * findSum(n-1)

}

console.log(findSum(5))


