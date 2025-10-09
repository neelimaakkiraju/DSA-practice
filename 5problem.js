//fibonacci series using for loop

function fib(num){
    const arr = [0, 1];
    for(let i = 2; i<=num; i++){
        arr.push(arr[i-1] + arr[i-2]
        )
    }
    console.log(arr)
}

fib(3)


//fibonacci  series using recursion

function fib2(n){
    if(n<=1) return n;

    return fib2(n-1)+ fib2(n-2)
}

console.log(fib2(8))