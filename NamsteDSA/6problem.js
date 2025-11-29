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
    for(let j = 0; j<5-i;j++){
      result = result+"* "
    }
    console.log(result)
}




