// check given string is isomorphic or not


function isIsomorphic(s, t){
    let mapStr1 = {};
    let mapStr2 = {};

    for(let i =0; i< s.length;i++){
      if(!mapStr1[s[i]] && !mapStr2[t[i]]){
        mapStr1[s[i]] = t[i]
        mapStr2[t[i]] = s[i]
    }
    else if(mapStr2[t[i]] !== s[i]){
        return false;
    }
    else if(mapStr1[s[i]] !== t[i]){
       return false;
    }
    }

    return true;
}


console.log(isIsomorphic("egg", "add"))

console.log(isIsomorphic("paper", "title"))

console.log(isIsomorphic("foo", "bar"))