const prompt = require('prompt-sync')();

var output = [];
var count=1;
function fizzBuzz(){
   
    if(count % 3 === 0 && count % 5 === 0){
        output.push('FizzBuzz');
    }
    else if(count % 3 === 0){
        output.push('Fizz');
    }
    else if(count % 5 === 0){
        output.push('Buzz');
    }
    else{
        
        output.push(count);
    }
    count++;
}

const iterations = parseInt(prompt('Enter the number of iterations: '));


for (let i = 0; i < iterations; i++) {
    fizzBuzz();
}


console.log('\nThe FizzBuzz Array is -: \n', output);