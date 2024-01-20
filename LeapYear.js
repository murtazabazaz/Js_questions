const prompt = require('prompt-sync')();
// code to check if a year is leap year or not..
function isLeap(year) {
    
    var year = prompt("Enter the year to be checked = ");

     if(year % 4 === 0){
      if(year % 100 === 0){
        if(year % 400 === 0){
          return console.log("Leap year.");
        }
        else{
          return console.log("Not leap year.")
        }
      }else{
        return console.log("Leap year.")
      }
    }else{
      return console.log("Not leap year.")
    }
 
    
    }

    isLeap();
