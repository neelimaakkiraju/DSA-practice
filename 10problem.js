//max profit with brute force

function maxProfit(arr){
    resultProfit = 0;
    for(let i=0;i< arr.length-1;i++){
        for(let j = i+1; j< arr.length;j++){
            const currentProfit = arr[j]- arr[i]
            if(currentProfit > resultProfit) resultProfit = currentProfit;
            console.log(i,j)
        }
         
    }
    return resultProfit
   
}

console.log(maxProfit([7,1,8,3,6,4]))

