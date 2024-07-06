
const prompt = require('prompt-sync')();
function fibonacciGenerator (n) {

    var output = [];
    if(n === 1)
    {
        output= [0];
    }
    
    else if (n === 2)
    {
        output = [0, 1];
    }
    
    else
    {
        output = [0, 1];

        for(var i = 2; i < n; i++){
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }

    return output;
}

var input = prompt('enter the number upto which the fibo should run = ' );

console.log('fic', fibonacciGenerator(input));