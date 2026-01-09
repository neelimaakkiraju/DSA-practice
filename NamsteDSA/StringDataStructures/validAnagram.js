// find given string anagram or not

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let map = {};
    for(let i =0; i<str1.length;i++){
        if(!map[str1[i]]){
            map[str1[i]] = 1;
        }else{
            map[str1[i]]++
        }
    }


    for(let i = 0; i<str2.length;i++){
        if(!map[str2[i]] || map[str2[i] < 0]){
           return false;
        }else{
            map[str2[i]]--
        }
    }

   return true;

}

console.log(isAnagram("anagram", "nagaram"))

console.log(isAnagram("rat", "car"))