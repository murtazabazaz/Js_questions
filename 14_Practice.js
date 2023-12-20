const prompt = require('prompt-sync')();

// Q1 

console.log("Mur\"".length);

// Q2

let sentence = "the quick brown fox jumps over the lazy dog";
console.log(sentence.includes("dog"));
console.log(sentence.startsWith("the"));
console.log(sentence.endsWith("dog"));

// Q3 Program to covert a given sentence to lowercase...

let sen = prompt("Enter a sentence -: ");
console.log(sen.toLowerCase());

// Q4 Extract the amount out of this string - "Please give Rs 1000"

let am = "Please give Rs 1000";
let amount = Number.parseInt(am.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof amount);

// Q5 Try to change 4th character of a given string were you able to do it?

let friend = "sajad";
friend[4] = 'r';
console.log(friend); // friend is not changed, because string is immutable.

// Aprogram to find the word without using includes..

let a = prompt("enter the sentence ");
let b = prompt("enter the word to be searched -: ");

console.log(`The word "${b}" ${a.includes(b) ? 'is' : 'is not'} in the sentence`);

// replace all vowvels in a sentence with star..
let sentence2 = prompt("enter the sentence -: ");
let replacedSentence = sentence2.replace(/[aeiou]/ig, '*');
console.log(replacedSentence);