// group the anagram word in given array

function groupAnagram(str){
    let map = {}
    for(let i = 0; i<str.length;i++){

        let sortedArr = str[i].split("").sort().join("")
        if(!map[sortedArr]){
            map[sortedArr] = [str[i]]
        }
        else{
            map[sortedArr].push(str[i])
        }
    }
    return [...Object.values(map)]
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))