// Nested loops


function nestedLoop(num){
    for(let i = 0; i<num; i++){
        for(let j = 0; j< num;j++){
            console.log("i="+i,"j="+j)
        }
    }
}

console.log(nestedLoop(3))


//loops practice


function nestedLoop2(num){
    for(let i = 0; i<num; i++){
        for(let j = 0; j < i;j++){
            console.log("i="+i,"j="+j)
        }
    }
}

console.log(nestedLoop2(3))