//  find largest odd number in a string


// using for loop
var largestOddNumber = function(num) {

   for (let i = num.length - 1; i >= 0; i--) {
        if ((num[i] - '0') % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
};


console.log(largestOddNumber("575534"))


// using while loop

function findOddNum(str){
    let i = str.length-1;

    while(i>=0){
        if(Number(str[i] % 2 !== 0)){
           return str.substring(0,i+1);

        }

        i--;
    }
    return ""
}

console.log(findOddNum("10133890"))