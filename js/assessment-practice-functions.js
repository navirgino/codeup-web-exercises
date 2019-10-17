"use strict";
/*Make a function named rollDice(sides)
 that takes in an argument containing the
  number of sides the die should have.
  Generate a random number between 1 up to
   and including the number of sides.*/
function rollDice(sides){
    if(sides === 6){
      return Math.floor(Math.random() * 6) + 1;
    }else if(sides === 4){
        return Math.floor(Math.random()*4) +1;
    }else if(sides === 20){
        return Math.floor(Math.random()*20) +1;
    }

}

console.log(rollDice(4));
console.log(rollDice(6));
console.log(rollDice(20));


/*Make a function named absoluteValue(number)
 that returns the absolute value of a number.*/
function absoluteValue(number){

    if(typeof parseInt(number === "string")){
        return number;
    }else if(typeof parseInt(number === "number")) {
        return Math.abs(number);
    }
}

console.log(absoluteValue(6));
console.log(absoluteValue("macaroni"));
console.log(absoluteValue("6"));
console.log(absoluteValue("true"));

/*Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.*/



/*Make a function named not(input) returns the input with a flipped boolean*/
function not(input){
    if (input === true){
        return false;
    }else{
        return true;
    }
}

console.log(not(false));
console.log(not(true));

/*Make a function named notNot(input) that the negation of the negation of the input.*/


/*Make a function named and(predicate1, predicate2) that returns the logical operation of AND*/


/*Make a function named or(predicate1, predicate2) that returns the logical operation of OR*/


/*
Write a function called reverseString(string) that reverses a string*/

/*
Make a function named isConsonant(letter)*/
function isConsonant(letter){
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        return("Your letter is a vowel!");
    }else if(typeof letter.length <= 1 === "string") {
        return("Your letter is a consonant!");
    }else{
        return("That's not a letter!")
    }
}

console.log(isConsonant('a'));
console.log(isConsonant('z'));
console.log(isConsonant('macaroni'));
console.log(isConsonant(6));


/*Make a function named isSpace(letter) that returns if a character is a space character*/
function isSpace(letter) {
    if (letter == "" + letter) {
        return letter;
    }else{
        return ;
    }
}

console.log(isSpace(" macaroni"));
console.log((isSpace("macaroni")));