// check palindrome or not using two pointer approach


function isPalindrome(str){
    str = str.toLowerCase()
    let i = 0;
    let j = str.length-1;

    while(i<j){
        if(!str[i].match(/[0-9a-z]/i)){
           i++
        }
        else if(!str[j].match(/[0-9a-z]/i)){
            j--
        }
        else if (str[i] === str[j]){
          i++; j--;
        }
        else{
           return false;
        }
    }
    return true;
}


console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(isPalindrome("race a car"));