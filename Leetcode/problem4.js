//finding max and min element in array

const myArr = [-1,0,1,5,6,8,9,10,-15]

const result = Math.max(...myArr)
const result2 = Math.min(...myArr)
console.log(result)
console.log(result2)

//palindrome number

function isPalindrome(num){
     let result = num<= 0 ? false : +num.split("").reverse().join("")
     let result2 = +num.split("") // adding "+" to convert the the string number to number
     console.log(typeof result2)
     console.log(result)
}

isPalindrome("0")