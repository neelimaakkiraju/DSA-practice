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



// approach 2 optimized method


function findMaxCount2(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    map[str[i]] = !map[str[i]] ? 1 : ++map[str[i]]
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  let maxCons = 0;
  let mapKeys = Object.keys(map)
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
     maxVowels = Math.max(maxVowels, map[mapKeys[i]])
    } else {
      maxCons = Math.max(maxCons, map[mapKeys[i]]);
    }
  }

  return maxCons + maxVowels
}


console.log(findMaxCount2("aeiaeia"))