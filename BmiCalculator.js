const prompt = require('prompt-sync')();
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(w, h){
    var bmi = w/Math.pow(h, 2);
   return Math.round(bmi);
     

}
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.*/

let weight = prompt('Enter your weight in Kg -: ');
let height = prompt('Enter your height in Meters -: ');




console.log('Your Bmi Index is -:', bmiCalculator(weight, height));


// logic for bmi...

if(bmiCalculator(weight, height) <= 0 ){
    console.log('Your Bmi Index is not defined..')
}
else if(bmiCalculator(weight, height) > 1 && bmiCalculator(weight, height) < 15){
    console.log('Your Bmi Index is Severly UnderWeight')
}
else if(bmiCalculator(weight,height)>= 15 && bmiCalculator(weight,height) <= 18){
    console.log('Your Bmi Index is UnderWeight')
}
else if(bmiCalculator(weight,height) > 18 && bmiCalculator(weight,height) <= 25 ){
    console.log('Your Bmi Index is Normal')
}
else if(bmiCalculator(weight,height) > 25 && bmiCalculator(weight,height) <= 30 ){
    console.log('Your Bmi Index is OverWeight')
}
else if(bmiCalculator(weight,height) > 30 && bmiCalculator(weight,height) <= 40 ){
    console.log('Your Bmi Index is Obese')
}
else if(bmiCalculator(weight, height) > 41 && bmiCalculator(weight, height) <= 60 ){
    console.log('Your Bmi Index is Severly Obese')
}
else{
    console.log('Enter valid Weight & Height')
}

