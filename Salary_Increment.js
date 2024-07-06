const prompt = require('prompt-sync')();

// program to increment the salary by a given percentage

var salary = [];
var size = prompt('Enter the Number of Employees -: ');

for (let i = 0; i < size; i++) {
    salary[i] = parseFloat(prompt('Enter salary of the Employee = '));
}

for (let j = 0; j < salary.length; j++) {
    console.log('Salary for Employee', j + 1, '= Rs.', salary[j]);
}

// Increment in salary...

var percent = parseFloat(prompt('Enter the percent by which the salary has to be increased = '));

function salaryInc(element, index, array) {
    array[index] = element + (element * percent) / 100;
}

salary.forEach(salaryInc);

console.log('Increased salary by increment of', percent + '%:');

for (let j = 0; j < salary.length; j++) {
    console.log('New Salary for Employee', j + 1, '= Rs.', salary[j]);
}