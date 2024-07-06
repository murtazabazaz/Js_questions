const prompt = require('prompt-sync')();
//Generating a random dice number..

// var a = Math.random();
// a = Math.floor(a*6)+1;
// console.log(a)


// // Love Calculator...

// var male = prompt('Enter your name -: ');
// var female = prompt('Enter her name -: ');

// var loveScore = Math.random();
// loveScore = Math.floor(loveScore*100)+1;
// console.log('\nThe ❤️  between', male, '&', female, '= ', loveScore,'%.');

// if(loveScore>60){
//     console.log('You guys are meant to be...')
// }
// else{
//     console.log('Move on dear!!!', loveScore,'% , is pretty low.')
// }

// practice:

var luck = Math.random()
luck = Math.floor(luck*100)+1;
//
var name1 = prompt("enter your name -: ");

console.log("The luck of", name1,"=",luck+"%");

if(luck>60){
    console.log("You are unbeatable!!!");
}
else{
    console.log("Stay way from everything!!!")
}