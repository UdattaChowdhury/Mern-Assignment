let n = 5;

let space = (2 * n - 1) / 2;
for (let i = 1; i <= n; i++){
    for (let j = 1; j <= space; j++){
        process.stdout.write("*");
    }
    for (let j = 1; j <= 2*i-1; j++){
        if (j == 1 || j==2*i-1){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }
    for (let j = 1; j <= space; j++){
        process.stdout.write("*");
    }
    console.log();
    space--;

    space = 0;
    for (let i = n; i >= 1; i--){
        for (let j = 1; j <= space ; j++){
            process.stdout.write("*");
        }
        for (let j = 1; j <= 2*i-1; j++){
            if (j == 1 || j == 2*i-1){
                process.stdout.write("*");
            }
            else{
                console.log();
            }
        }
        for (let j = 1; j <= space; j++){
            process.stdout.write("*");
        }
        console.log();
        space++;
    }
}