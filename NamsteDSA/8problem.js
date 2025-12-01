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


// using while loop

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;    
};