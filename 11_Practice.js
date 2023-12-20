const prompt = require('prompt-sync')();

// Q1-: Write a program to print msrkd of  a student using for loop..

let marks = {
  murtaza: 89,
  muied: 77,
  kaleem: 88,
  kamran: 87

}
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// Q2-: Write the first program using for in loop...

for (let i in marks) {
  console.log("The marks of " + i + " are " + marks[i]);

}


//Q3-: write a program that shows try again until the user enters correct number ...

let correct = 5
let ans;

while (ans != correct) {

  ans = prompt("Enter the correct number: ");
  if (ans == correct) {
    console.log("You have entered the correct number.");
  }
  else {
    console.log("try again !!")
  }

}

//Q4-: write a program using function to find mean of 5 numbers ...

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;

}
console.log("The mean of  the 5 numbers is " + mean(1, 2, 3, 4, 5));

