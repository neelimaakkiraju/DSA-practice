// check the number is palindrome or not




function findPalindrome(num){
    let result = num.toString()
    let final = result.split().reverse().join()
    if(num === final ){
        return true
    }else{
        return false
    }
}

console.log(findPalindrome(700))
