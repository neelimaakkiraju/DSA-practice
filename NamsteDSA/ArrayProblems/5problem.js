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
        for(let j = 0; j <= i;j++){
            console.log("i="+i,"j="+j)
        }
    }
}

console.log(nestedLoop2(3))

//j value as i

function nestedLoop3(num){
    for(let i = 0; i<num; i++){
        for(let j = i; j >= 0;j--){
            console.log("i="+i,"j="+j)
        }
    }
}

console.log(nestedLoop3(6))

//i value as j

function nestedLoop4(num){
    for(let i = 5; i>0; i--){
        for(let j = 0; j <i;j++){
            console.log("i="+i,"j="+j)
        }
    }
}

console.log(nestedLoop4(4))