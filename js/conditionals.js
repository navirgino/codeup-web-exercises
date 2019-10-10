"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//I need a confirm dialogue first
// then I need to ask the user if they want to enter a number if yes is selected



/*
if (confirm("Would you like to enter a number?") === true){
   var number =  parseInt(prompt("Enter number: "));
}else{
    alert("You have chose not to input a number.");
}if (number%2 === 0){
    alert("Your number is Even!");
} else{
    alert("Your number is Odd");
} if (number){
    var numPlusHundred = number + 100;
    alert("Your number " + number + " plus a hundred is: " + numPlusHundred); //concatenating for whatever reason here <--- ???
} if (number > 0){
    alert("Your number is positive.");
} else{
    alert("Your number is negative.");
}
*/


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*function analyzeColor(color){
    var returnMessage;
    switch(color){
        case "blue":
            returnMessage = "blue is the color of the sky";
            break;
        case "red":
            returnMessage = "Strawberries are red";
            break;
        case "cyan":
            returnMessage = "I don't know anything about cyan";
            break;
        default:
            returnMessage = "ok, fine, bye";
            break;
    }
    return returnMessage;


}

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('cornbread'));*/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
/*
function analyzeColor(randomColor){
    var returnMessage;
    switch(randomColor){
        case "blue":
            returnMessage = "blue is the color of the sky";
            break;
        case "red":
            returnMessage = "Strawberries are red";
            break;
        case "cyan":
            returnMessage = "I don't know anything about cyan";
            break;
        default:
            returnMessage = "ok, fine, bye";
            break;
    }
    return returnMessage;


}

console.log(analyzeColor(randomColor));
*/

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
/*function analyzeColor(randomColor){
    var returnMessage;
    switch(randomColor){
        case "blue":
            returnMessage = "blue is the color of the sky";
            break;
        case "red":
            returnMessage = "Strawberries are red";
            break;
        case "cyan":
            returnMessage = "I don't know anything about cyan";
            break;
        default:
            returnMessage = "ok, fine, bye";
            break;
    }
    return returnMessage;


}

console.log(analyzeColor(randomColor));*/
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/*var colorInput = prompt("Input a color: ");

function analyzeColor(colorInput){
    var returnMessage;
    switch(colorInput){
        case "blue":
            returnMessage = "blue is the color of the sky";
            break;
        case "red":
            returnMessage = "Strawberries are red";
            break;
        case "cyan":
            returnMessage = "I don't know anything about cyan";
            break;
        default:
            returnMessage = "ok, fine, bye";
            break;
    }
    return returnMessage;


}

console.log(analyzeColor(colorInput));*/


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function luckyNumber() {
    var max= 0;
    var min=5;
    return Math.floor(Math.random() * max - min + 1)
}
function calculatedTotal() {
    if (luckyNumber(0)){
        return  0;
    }if (luckyNumber(1)){
        return  10 / 100;
    }if (luckyNumber(2)){
        return 25 / 100;
    }if (luckyNumber(3)){
        return 35 / 100;
    }if (luckyNumber(4)){
        return 50 / 100;
    }if (luckyNumber(5)){
        return "It's all for free!!!"
    }else{
        return "ok."
    }
}

console.log(calculatedTotal());

/*
console.log(luckyNumber());


function calculateTotal(luckyNumber() {
    switch (luckyNumber) {
        case 0:
            alert("You have a 0% discount!");
            alert("Your total is " + luckyNumber(0));
            break;
        case 1:
            alert("You have a 10% discount!");
            alert("Your total is " + luckyNumber(1));
            break;
        case 2:
            alert("You have a 25% discount!");
            alert("Your total is " + luckyNumber(2));
            break;
        case 3:
            alert("You have a 35% discount!");
            alert("Your total is " + luckyNumber(3));
            break;
        case 4:
            alert("You have a 50% discount!");
            alert("Your total is " + luckyNumber(4));
            break;
        case 5:
            alert("It's free!!!!!");
            alert("Your total is " + luckyNumber());
            break;
        default:
            alert("Interesting. . .");
            break;
    }
}

console.log(calculateTotal(luckyNumber()));
*/



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
