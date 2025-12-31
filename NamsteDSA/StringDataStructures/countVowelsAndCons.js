// Find the max vowels and consonants in string


// approach 1

function findMaxCount(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  let maxCons = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      if (map[str[i]] > maxVowels) {
        maxVowels = map[str[i]];
      }
    } else if (map[str[i]] > maxCons) {
      maxCons = map[str[i]];
    }
  }

  return maxCons + maxVowels
}


console.log(findMaxCount("successes"))



// approach 2


function findMaxCount2(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  let maxCons = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      if (map[str[i]] > maxVowels) {
        maxVowels = map[str[i]];
      }
    } else if (map[str[i]] > maxCons) {
      maxCons = map[str[i]];
    }
  }

  return maxCons + maxVowels
}


console.log(findMaxCount2("successes"))