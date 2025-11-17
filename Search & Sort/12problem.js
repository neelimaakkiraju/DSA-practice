//fibonacci generator


function generateFibonacci(num){

    let result = []
    for(let i = 0; i<num.length;i++){
          for(let j = i+1; j<num.length;j++){
            let final = num[i]+ num[j]
            result.push(final)
          }
    }
    return result
}

console.log(generateFibonacci(5))



var fibGenerator = function*() {
     let a = 0, b = 1;

    while (true) {
        yield a;        // yield current Fibonacci number
        [a, b] = [b, a + b];  // update to next
    }
};

console.log(fibGenerator())
