// generate star pattern

for(let i = 0;i<5;i++){
    let star = ""
    for(let j = 0; j<5;j++){
       star = star+ "* "
    }
    console.log(star)
}


for(let i = 0;i<5;i++){
    let star = ""
    for(let j = 0; j<i+1;j++){
       star = star+ "* "
    }
    console.log(star)
}



for(let i = 0;i<5;i++){
    let result = ""
    for(let j = 1; j<i+1;j++){
      result = result+ j +" "
    }
    console.log(result)
}


for(let i = 0;i<5;i++){
    let result = ""
    for(let j = 0; j<i;j++){
      result = result+ i +" "
    }
    console.log(result)
}


for(let i = 0;i<5;i++){
    let result = ""
    for(let j = 0; j<5-i;j++){
      result = result+ j +" "
    }
    console.log(result)
}




for(let i = 0;i<5;i++){
    let result = ""
    for(let j = 0; j<5-(i+1);j++){
      result = result+ ". "
    }
    for(let k = 0; k<i+1;k++){
      result = result+"* "
    }
    console.log(result)
}




let n = 5;

for(let i = 0; i<n;i++){

    let row = ""
    let toggle = 1
    for(let j = 0; j<i+1; j++){
        row = row + toggle + " "
       if(toggle == 1){
           toggle = 0
       }else{
        toggle =1
       }
    }
    console.log(row)
}


let x = 5;
let toggle = 1
for(let i = 0; i<x;i++){

    let row = ""
    
    for(let j = 0; j<i+1; j++){
        row = row + toggle + " "
       if(toggle == 1){
           toggle = 0
       }else{
        toggle =1
       }
    }
    console.log(row)
}