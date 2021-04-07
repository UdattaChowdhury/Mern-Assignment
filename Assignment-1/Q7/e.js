let n = 5;

function fact(n){

    let factorial = 1;

    for (let i = 2; i <= n; i++){
        factorial *= i;
    }

    return factorial;
}

for (let i = 0; i <= n; i++){
    for (let j = 0; j <= i; j++){
        process.stdout.write(fact(i)/(fact(j)*fact(i-j)) + " ");
    }
    console.log();
}