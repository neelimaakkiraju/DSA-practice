//find min and max in an array

//brute force

let arr = [1, 4, 3, -5, -4, 8, 6]

console.log(Math.min(...arr))
console.log(Math.max(...arr))



let result = arr.sort((a,b)=>a-b)


console.log(result)