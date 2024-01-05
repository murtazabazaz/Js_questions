const prompt = require('prompt-sync')();
//Generating a random dice number..

var a = Math.random();
a = Math.floor(a*6)+1;
console.log(a)


// Love Calculator...

var male = prompt('Enter your name -: ');
var female = prompt('Enter her name -: ');

var loveScore = Math.random();
loveScore = Math.floor(loveScore*100)+1;
console.log('\nThe ❤️  between', male, '&', female, '= ', loveScore,'%.');

if(loveScore>60){
    console.log('You guys are meant to be...')
}
else{
    console.log('Move on dear!!!', loveScore,'% , is pretty low.')
}