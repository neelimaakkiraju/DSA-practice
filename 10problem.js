//max profit with brute force

function maxProfit(arr){
    resultProfit = 0;
    for(let i=0;i< arr.length-1;i++){
        for(let j = i+1; j< arr.length;j++){
            const currentProfit = arr[j]- arr[i]
            if(currentProfit > resultProfit) resultProfit = currentProfit;
        }
    }
    return resultProfit
}

console.log(maxProfit([7,5,4,8,2]))

