// recursion


function myFun(n){
   if(n===10) return;
   console.log(n)
   myFun(++n)
}
let n =1
myFun(n)