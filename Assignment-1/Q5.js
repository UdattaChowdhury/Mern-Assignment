let n = 17287387393897687, 
count = 0;

while(n > 0){
    n = Math.floor(n/10);
    count++;
}
console.log(count);