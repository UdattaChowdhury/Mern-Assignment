let number1 = 1860;
let number2 = 340;

while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

console.log(`HCF is ${number1}`);