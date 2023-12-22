const prompt = require('prompt-sync')();

// Program to give remaining weeks and months...
function lifeInWeeks(age) {
    

        
        var a = prompt('enter your age -: ');
        
        var remain = (80 - a);
        
        var x = remain*365;
        var y = remain*52;
        var z = remain*12;
         
        return console.log('You have '+ x + ' days, '+ y +' weeks,' ,'and', z+' months left.'  )
         
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks();