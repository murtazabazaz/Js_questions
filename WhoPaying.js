const prompt =require('prompt-sync')()
// Code to check who pays the bill..
function whosPaying(names) {
    
    var numberOfPeople = names.length;
    var randonPersonPos = Math.floor(Math.random()*numberOfPeople);
    var randonPerson = names[randonPersonPos]
    return randonPerson + ' is going to buy lunch today.'


 }       
   
 var name =[]
 var size = prompt('enter Number of people = ')
 for(let i =0;i<size;i++){
    name[i] = prompt('Enter the Guests name -: ');
}
console.log("The Lucky person is ", whosPaying(name));