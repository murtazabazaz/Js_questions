//Code to search name in an array using filter method
const prompt = require('prompt-sync')();
let a2 = [];
const si = prompt('enter size of array-: ');

for( let i=0;i<si;i++){
 a2[i]=prompt('enter the name -: ')
}

var bw = prompt('enter the name you want to search-: ');

let filteredNames = a2.filter((name)=> name == bw);


    if(filteredNames.length>0){
        return console.log('The Name '+ bw + ' matches ' + filteredNames[0] + ' in the array.')
    }
    
       else{

           console.log('name not found!!!')
       }
       