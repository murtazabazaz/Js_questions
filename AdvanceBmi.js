function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

// Example usage:
let weight = 65;
let height = 1.8;

let message = bmiCalculator(weight, height);
console.log(message);
