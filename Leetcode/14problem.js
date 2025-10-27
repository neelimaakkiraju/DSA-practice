//palindrome number

function isPalindrome(num){
    let num2 = num.toString()
    let result = +num2.split("").reverse().join("")
    if(result === num){
        return true
    }
    return false
}

console.log(isPalindrome(-121))