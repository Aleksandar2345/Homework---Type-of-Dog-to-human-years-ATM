// ---------------------HOMEWORK PART 1--------------------------------

// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types.

function typeReturn (var1){
    let input = var1;
    let result = typeof var1;
    return result;
}
// Type - Object
let myPen = Object();
myPen.material = 'plastic';
myPen.length = '20cm'
console.log(`Your type is ${typeReturn(myPen)}`);

// Type - Boolean 
console.log(`Your type is ${typeReturn(true)}`);

// Type - Number 
console.log(`Your type is ${typeReturn(22)}`);

// Type - String 
console.log(`Your type is ${typeReturn('Hello')}`);

// Type - Number 
console.log(`Your type is ${typeReturn()}`);


// ---------------------HOMEWORK PART 2--------------------------------

// Write a JavaScript function that will return:
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function calculateDogToHumanYears (num1,num2) {
    let result1 = num1 * 7;
    return result1;  
    
}

console.log(calculateDogToHumanYears(5));


// ---------------------HOMEWORK PART 3--------------------------------
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let myMoney = 40000;
let inputMoney = prompt('Enter the sum you want to withdraw');

function myAtm () {
       if (inputMoney <= myMoney) {
    result = myMoney - inputMoney;
    return `You have ${result} MKD left`;
    } else if(inputMoney > myMoney) {
    return `You have insuficient funds`;
    } else (inputMoney == String) 
    return `Please enter a number`
}
 
console.log(myAtm(myMoney, inputMoney));