// find jewels and stones in given string

//using built-in method

function findJewels(str, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (str.includes(stones[i])) {
      count++;
    }
  }

  return count;
}

console.log(findJewels("aA", "aAAbbbb"));

console.log(findJewels("z", "ZZ"));

console.log(findJewels("badc", "ccc"));

// using loops

function findJewels2(str, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (stones[i] === str[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(findJewels2("aA", "aAAbbbb"));

console.log(findJewels2("z", "ZZ"));

console.log(findJewels2("badc", "ccc"));



// using set method

function findJewels3(str,stones){
    let jewelSet = new Set();

    for(let i = 0; i<str.length;i++){
        jewelSet.add(str[i])
    }
    let count = 0;
    for(let j = 0; j<stones.length;j++){
        if(jewelSet.has(stones[j])){
            count++;
        }
    }

    return count;
}

console.log(findJewels3("wWQ", "WQhhhjhWWWwwww"))