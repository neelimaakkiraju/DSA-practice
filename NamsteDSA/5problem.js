// Nested loops


function nestedLoop(num){
    for(let i = 0; i<num; i++){
        for(let j = 0; j< num;j++){
            console.log(i,j)
        }
    }
}

console.log(nestedLoop(3))