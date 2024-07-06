const prompt = require('prompt-sync')();

// Making a guest list and then checking if the person is in the guest list...

const guestList = [];
const totalGuest = prompt('Enter Number of guests invited = ');
var count = 1;
for(let i =0;i<totalGuest;i++){
    guestList[i] = prompt('Enter the Guests name -: ');
}

/* 
for(let j=0;j<guestList.length;j++){
    console.log(count,'-:', guestList[j]);
    count++;
}
*/
const Search = prompt('Enter the name to be searched -: ');


    if(guestList.includes(Search)){
        console.log('welcome!!')
    }
    else{
        console.log('->', Search, 'is not on the list...')
    }

