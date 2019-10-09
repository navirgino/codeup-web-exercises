"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin
/*if(isAdmin){
    //show a specific navbar
}*/

//Together: Send a 20% off coupon if its users birthday
/*if(isBirthday){
    //send a 20% coupao! happy bday!
}*/
//Together: Write an if statement that alerts "It's raining" if isRainy is true
/*var isRainy = false;
if(isRainy){
    alert("It's raining");
}else{
    alert("It's not raining");
}*/
//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
/*
var itemCost = 100;
var currentBalance = 200;
/!*If the item is less than my current balance, I will be able to purchase item*!/
if(itemCost < currentBalance){
    alert("You can purchase item.");
}
*/



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
/*var numberOfLives = 0;*/

/*if (numberOfLives === 0){
    alert("Sorry, game over.");
}*/

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
/*var weather = "snowing";*/

// if (weather === "snowing"){
//     alert("It's snowing!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
/*var numberInput = 11;*/

/*if (numberInput > 10){
    alert("True");
}*/

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
/*var isAdmin = false;

if(isAdmin){
    //show a specific navbar
    alert("User is admin!");
}else {
    //show regular navbar
    alert("user is a regular user.");
}*/
//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
/*var isRaining = true;
if(isRaining){
    alert("It's raining!")
}else {
    alert("have a nice day!");
}*/



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
/*if (numberOfLives === 0){
    alert("Sorry, game over.");
}else{
    alert("Next Level!");
}*/

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
/*if (weather === "snowing"){
    alert("It's snowing");
}else{
    alert("Check back later for more details.");
}*/

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
/*if (numberInput > 10){
    alert("True")
}else{
    alert("The number is less than 10.")
}*/

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
/*function checkIfGameIsOver(numberOfLives) {
    if (numberOfLives === 0){
        return "Sorry, game over..."
    }else{
        return "Next Level"
    }

}

console.log(checkIfGameIsOver(6));*/


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
/*function checkIfSnowing(weather){
    var returnMessage;
    if (weather === "snowing"){

        returnMessage =  "It's snowin'!";
    }else{
        returnMessage = "It ain't snowin!";
    }
    return returnMessage;
}
    
checkIfSnowing(weather("sunny"));*/

// SHOULD WE DELETE STUFF EXAMPLE

/*    var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');

    console.log("The value of the confirm is: " + weShouldDeleteStuff);

    if (weShouldDeleteStuff) {
       // delete all the things...
       alert("We are deleting everything...");
   } else {
       alert("Operation Canceled!");
   }*/


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed",
// if they are not, alert "Sorry, you are not able to proceed"

/*    var age = confirm("Are you 13 years of age, or older?");

    console.log("The value of the confirm is: " + age);

    if (age === true){
        alert("You may proceed.");
    }else{
        alert("Sorry, you are not able to proceed.")
    }*/

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
/*var weather = "snowing";
if (weather === "snowing"){
    alert("It's snowing");
}else if (weather === "raining"){
    alert("It'sr raining");
}else if (weather === "sunny!"){
    alert("It's sunny!");
}else {
    alert("have a nice day")
}*/


//Together: refactor the above statement as a function
/*function weatherChanges(weather){
    if (weather === "snowing"){
        alert("It's snowing");
    }else if (weather === "raining"){
        alert("It'sr raining");
    }else if (weather === "sunny!"){
        alert("It's sunny!");
    }else {
        alert("have a nice day")
    }
}

console.log(weatherChanges("windy"));*/
// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called,
// it should return a message informing the user what to do when approaching that color light at an intersection.
/*function trafficLight(color){
    var returnMessage;

    if (color === "red"){
        returnMessage = "stop!"
    }else if (color === "yellow"){
        returnMessage = "SLOW DOWN"
    }else if (color === "green"){
        returnMessage = "gotta GO fast"
    }else {
        returnMessage = "That's not a traffic light color. . ."
    }
    return returnMessage;
}

console.log(trafficLight("red"));
console.log(trafficLight("green"));
console.log(trafficLight("yellow"));
console.log(trafficLight("cornbread"));*/

// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age.
// If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license,
// if they are 16 or older and do not have a permit, they are not eligble for a license.


// userAge < 15 = not eligible for learners permit
// else, they are
// if eligible = check age
// if they are 15 they are eligible for learners permit
// if they are 16 and have a permit, they are eligible for license
//if they are 16 or older and do not have a permit, they are eligible for a license

/*var userAge = 16;
var hasPermit = false;

if (userAge < 15){
    alert("Sorry not eligible for a permit");
}else {
    if (userAge === 15){
        alert("you can have a permit");
    } else if(userAge >= 16 && hasPermit){
        alert("You can have a license");
    } else if(userAge >= 16 && !hasPermit){
        alert("sorry you need a permit first!");
    }

}*/

// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary


// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

/*
var weather = "sunny";
var weatherMessage = (weather === "rainy") ? "It's raining." : "Have a nice day!";

console.log(weatherMessage);
*/



// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy",
// "sunny", "snow", and a default case.

var weather  = prompt("What is the weather like today?");

switch(weather){
    case "rainy":
        alert("It's raining");
        break;
    case "sunny":
        alert("It's sunny!");
        break;
    case "snow":
        alert("It's snowing!");
        break;
    default:
        alert("Um.. ok. Have a nice day!");
        break;
}

//TODO: Rewrite the intersection function from earlier as a switch statement.

var color = prompt("What color is the traffic light?");

function lightColors(color){
    var returnMessage;
    switch(color){
        case "red":
            returnMessage = "stop!";
            break;
        case "yellow":
            returnMessage = "slow dahn";
            break;
        case "green":
            returnMessage = "gogogogo";
            break;
        default:
            returnMessage = "Drive safe";
            break;

    }
    return returnMessage;

}


console.log(lightColors("red"));
console.log(lightColors("yellow"));
console.log(lightColors("green"));
console.log(lightColors("corn"));


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations.
// You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
// if shopping has not been done
// child earns $5 a week
// else child earns $10 a week


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
// if sunny
// insert str response output
// else if rainy
// insert str response output
// else if snowing
// insert str response output
// else if overcast
// insert str response output
// else null

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
// if user stay on white theme
// background and text stay the same
// else user picks black theme
// background turns black and text turns white
// however, if user goes back to white option, color goes back to white bg and black text