//check given string palindrome

function isPalindrome(str){
    let reverseStr = str.split("").reverse().join("")
    if(reverseStr===str){
        return true
    }
    return false
}

console.log(isPalindrome("oopmasahjhasampoo"))