// buy and selling stocks with profit

function sellStocks(prices){
    let min = prices[0]
    let maxProfit = 0;
    for(let i = 0; i<prices.length;i++){
        if(prices[i]-min > maxProfit ){
            maxProfit = prices[i]-min
        }
        if(prices[i]< min){
            min = prices[i]
        }
    }

    return maxProfit
}


console.log(sellStocks([7,1,5,3,6,4]))

console.log(sellStocks([7,6,4,3,1,10]))

console.log(sellStocks([7,5,6,4]))