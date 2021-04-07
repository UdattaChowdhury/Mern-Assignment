let n = 5;

for (let i = 1; i <= n; i++){
    
    let emp_spc = 2 * n - 2 * i;
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= emp_spc; j++){
        process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    }

    console.log();
}

for (let i = n; i >= 1; i--){

    let emp_spc = 2 * n - 2 *i;
    for (let  j =1; j <= i; j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= emp_spc; j++){
        process.stdout.write(" ");
    }
    for (let  j =1; j <= i; j++){
        process.stdout.write("*");
    }

    console.log();
}