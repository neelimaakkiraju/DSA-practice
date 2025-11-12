//  count perfect squares less than given number


function perfectSquares(num){
       let result = []
       for(let i = 1;i*i<num;i++){
        result.push(i*i)
       }

       return result.length
}

console.log(perfectSquares(9))