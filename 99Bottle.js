const prompt = require('prompt-sync')();

var bottles = 99;
while(bottles>=0){
    if(bottles>0){

        console.log(bottles,' bottles of milk on the wall, ',bottles,' bottles of milk.');
    }
    
    else{
        console.log('No more bottles of milk on the wall, no more bottles of milk. ')
    }
    bottles--;
    if(bottles>0){

        console.log('Take one down and pass it around,', bottles,' bottles of milk on the wall.\n\n');
    }
    else if(bottles==0){
        console.log('Take one down and pass it around, no more bottles of milk on the wall.\n\n')
    }
    else{
        console.log('Go to the store and buy some more, 99 bottles of milk on the wall.')
    }

}
/*
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
*/