// taking array from the user..

const prompt = require('prompt-sync')();

var a = [];
var size = prompt('Enter the size of the array -: ');

for(var i=0;i<size;i++){
 
    a[i]= prompt("Enter the numbers -: ");

}

for(i=0;i<a.length;i++){
    console.log(a[i], typeof a);
}