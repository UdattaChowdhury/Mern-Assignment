let n = 9735, 
rev = 0;

while(n > 0){
    let remainder = n % 10;
    rev = rev*10 + remainder;
    n = Math.floor(n/10);
}
console.log(rev);