// count the digits

function countDigits(n) {
  let count = 0;
  n = Math.abs(n)
   if (n == 0) return 1;
  while (n > 0) {
   

    n = Math.floor(n / 10);
    count++;
  }
  return count
}

console.log(countDigits(-236));

console.log(countDigits(236898989708));
