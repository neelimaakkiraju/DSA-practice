// power of two


function powerOfTwo(num){
    if(num == 1) return true;
    else if(num%2 !== 0 || num<1) return false;

    return powerOfTwo(num/2)
}

console.log(powerOfTwo(3))