// Code for Calculating remaining years...
// maximum age..
const prompt = require('prompt-sync')();

function lifeInWeeks(age) {
    

        
        var a = prompt('enter your age -: ');
        
        var remain = (80 - a);
        
        var x = remain*365;
        var y = remain*52;
        var z = remain*12;
         
        return console.log('You have ', remain, 'years ', x, ' days, ', y ,' weeks,' ,'and', z,'months left.'  )
         
 
    }
    
    lifeInWeeks();