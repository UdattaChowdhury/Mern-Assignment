let n = 2;

for (let i = 1; i <= 10; i += 2){
    let k = 1;
    while(k <= i){
        n += 2;
        k++;
    }
    n += 2;
    process.stdout.write(n + " ");
}