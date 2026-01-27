// Guess number higher or lower

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */




function guessNumber(num){
    let l = 0;
    let r = num

    while(l <= r){
        let m = l + Math.floor((r-l)/2)

        let res = guess(m)

        if(res === 0){
           return m
        }
        else if (res<0){
           r = m - 1
        }
        else{
            l = m + 1
        }
    }
}


console.log(guessNumber(10))