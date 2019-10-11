/*function numOfChar(str){
    return str + " has " + str.length + " variables";
}

console.log(numOfChar("Homer"));*/


/*########################################################*/


/*
function madLib(){
    var noun = prompt("Enter a noun");
    var verb = prompt("Enter a verb");
    var adverb = prompt("Enter an adverb");
    return alert("So, you " + verb + " your " + noun + " very " + adverb + " Wow!");
}

console.log(madLib());*/

/*########################################################*/

/*function areaOfRectangularRoom() {
    var length = parseInt(prompt("What is the length of the room in feet? "));
    var width = parseInt(prompt("What is the width of the room in feet? "));
    var area = length * width;
    var sq_ft = area.toFixed(2) / 10.764;
    alert ("You have entered the dimensions of " + length + " feet by "
        + width + " feet.");
    alert("The area is: ");
    alert(area + " square feet.");
    alert(sq_ft.toFixed(2) + " square meters.");



}

console.log(areaOfRectangularRoom());*/




//if there are leftovers, show leftovers

/*function pizza() {
//prompt for the number of people
    var numOfPpl = parseInt(prompt("How many people are at the party?"));
//prompt for number of pizzas
    var numOfZa = parseInt(prompt("How many pizzas do you have?"));
//do qwick mafz math
    var slicesPerPerson = numOfZa.toFixed(2) / numOfPpl.toFixed(2);
//return slices
    alert("Each person gets " + Math.round(slicesPerPerson) + " slices of pizza.");
//show leftovers
    var leftovers = (slicesPerPerson%2) * 10;
    alert("You have " + Math.floor(leftovers) + " remaining.");
}


    console.log(pizza());*/
/*Write a function called identity(input) that takes in an
 argument called input and returns that input.*/
function identity(input){
    return input;
}

console.log(identity("Hello World"));
/*Write* a function called getRandomNumber(min, max) that
returns a random number between min and max values sent to
that function call.*/
function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomNumber(5, 1));

/*Write a function called first(input) that returns the first character
in the provided string.*/
function first(input){
    return input.charAt(0);
}

console.log(first("banana"));
/*Write a function called last(input)
 that returns the last character of a string.*/
function last(input){
    return input.charAt(input.length-1);
}

console.log(last("bandwagon"));
console.log(last("rumpelstiltskin"));

/*Write a function called rest(input)
 that returns everything but the first character of a string.*/
function rest(input){
    return input.substring(1);
}

console.log(rest("caca"));
/*Write a function called reverse(input)
 that takes a string and returns it reversed.
 */

/*Write a function called isNumeric(input)
 that takes an input and returns a boolean if the input is numeric.
 */
/*Write a function called count(input)
 that takes in a string and returns the number of characters.
 */
/*Write a function called add(a, b) that returns the sum of a and b
/*Write a function called subtract(a, b) that return the difference between the two inputs.
/*Write multiply(a, b) function that returns the product
/*Write a divide(numerator, denominator) function that returns a divided by b
/*Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
/*Write the function square(a) that takes in a number and returns the number multiplied by itself.
/*Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
/*Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you
want to apply. a and b are the two numbers to run that function on.*/


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */function sayHello(name){
     return name;
}

console.log(sayHello("Nico"));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/* TODO:
    * Store your name as a string in a variable named 'myName', and pass that
    * variable to the 'sayHello' function. You should see the same output in the
    * console.
*/


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


