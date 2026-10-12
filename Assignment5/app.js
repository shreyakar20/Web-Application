const readline = require('readline');
const math = require('./math');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {

    rl.question('Enter second number: ', (num2) => {

        const a = Number(num1);
        const b = Number(num2);

        console.log('Sum:', math.add(a, b));
        console.log('Product:', math.multiply(a, b));

        rl.close();
    });
});