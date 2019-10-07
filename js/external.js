"use strict";

console.log("Hello from external Javascript");

/*1. Use the alert function to show a message that says 'Welcome to my Website!'.*/

alert("Welcome to my Website!");

/*
2. Use a prompt to ask for the user's favorite color.
Use the user's response to alert a message that says that the color entered is your favorite color too.
For example, if the user enters "blue", your code should alert a message that says:
   "Great, blue is my favorite color too!"
*/

var color = prompt("What's your favorite color?");
var myColor = alert('COOL! My favorite color is also ' + color);
console.log(color);
console.log(myColor);


/*
3. Complete exercise 3 from the previous lesson,
 but write your code in the external.js file instead of in the console.
    When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
    Use an alert to show the results of each problem.
*/
/*A.) You have rented some movies for your kids:
    The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day,
    you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?*/
var PriceOfMoviePerDay = 3;
var littleMermaidDays = parseInt(prompt("How many days did you rent Little Mermaid?"));
var brotherBearDays = parseInt(prompt("How many days did you rent Brother Bears?"));
var herculesDays = parseInt(prompt("How many days did you rent Hercules?"));
var littleMermaidCost = littleMermaidDays * PriceOfMoviePerDay;
var brotherBearCost = brotherBearDays * PriceOfMoviePerDay;
var herculesCost = herculesDays * PriceOfMoviePerDay;
var totalCost = littleMermaidCost + brotherBearCost + herculesCost;
alert("Total cost of all movies are: $" + totalCost);

/*
B.) Suppose you're working as a contractor for 3 companies:' +
' Google, Amazon and Facebook, ' +
'they pay you a different rate per hour. ' +
'Google pays $400, Amazon $380, and Facebook $350. ' +
'How much will you receive in payment for this week? ' +
'You worked 10 hours for Facebook, 6 hours for Google and ' +
'4 hours for Amazon.*/
var googlePay = 400;
var amazonPay = 380;
var fbPay = 350;
var googlehr = prompt("How many hours at Google?");
var amazonHr = prompt("How many hours at Amazon?");
var fbHr = prompt("How many hours at Facebook?");
var totalPurse = (googlePay * googlehr) + (fbPay * fbHr) + (amazonPay * amazonHr);
alert("You are making: $ " + totalPurse);

/*C.) A student can be enrolled in a
class only if the class is not full and the
class schedule does not conflict with her current schedule.*/
function enrollment(){
    var fullClass = confirm("Is the class full?");
    var schedule = confirm("Does it conflict with your schedule");
    if ((fullClass === false) || (schedule === false)) {
        return alert("You cannot enroll");
    } else {
        return alert("You can enroll");
    }
}

console.log(enrollment());




/*D.) A product offer can be applied only
    if a person buys more than 2 items,
    and the offer has not expired.
    Premium members do not need to buy a
specific amount of products.*/
/*var howManyItems = prompt('How many items are your cart?');
var premiumMember = prompt("Are you a Premium Member?");
var discountQualification = (howManyItems >= 2 || (premiumMember = "yes" || "Yes"));
console.log(discountQualification);*/

function discountQualification() {
    var howManyItems = prompt("How many items in your cart?");
    if (howManyItems >= 2) {
        return alert("Congratulations you qualify!");
    } else if(confirm("Are you a premium member?")) {
        return alert("Congratulations you qualify!");
    } else {
        return alert("We're sorry, but you do not qualify at this point in time.")
    }

}

console.log(discountQualification());

