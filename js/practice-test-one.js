/*
Heather is wanting to join an after school club.
She is currently involved with another club at school, but luckily all after
school clubs will only meet on one day out of the week.
Return a string to Heather as to whether or not she can join another
club.*/



/*function Heather() {
   return ("You can you join!");
}

console.log(Heather());*/

// then i need to prompt for her schedule
/*var heathersSchedule = prompt("What day would you like to see that you have open?");

// then i need to see make an if else statement checking her availability for the new club
if (heathersSchedule === 'Monday'){
    alert("You can't, you have band that day.")
}if (heathersSchedule === 'Tuesday'){
    alert("You can't you have softball that day.")
}if (heathersSchedule === 'Wednesday') {
    alert("You can't you have Codeup that day.")
} else{
    alert("You can join!");
}

console.log(heathersSchedule);*/


/*Rodrigo is a chef, and needs to buy food for his restaurant.
He's worked out a deal with the shop and can get his food for a
twenty percent discount, but the shop changes their prices from week to week.
Rodrigo needs to buy tofu, lamb, and potatoes.
Return a string to Rodrigo with his total based on how much of each
item he's buying, by weight in pounds, the price of the
items per pound, and also inform him of the savings he's receiving
from the store.*/
var tofuPerPound = 10;
var lambPerPound = 10;
var potatoPerPound = 10;


//string on how much of each item's buying by weight in pounds
//string on price of items per pound
//string informing im of the savings he's receiving from the store


function random(){
    var lamb = parseInt(prompt("How many pounds lamb?"));
    var tofu = parseInt(prompt("How many pounds tofu?"));
    var potato = parseInt(prompt("How many pounds of potatoes?"));
    alert("You are buying " + tofu + " pounds of tofu, " + lamb + " pounds of lamb "
    + potato + " pounds of potatoes.");
    alert("The total is " + " $" + (parseFloat(tofuPerPound * tofu + lambPerPound * lamb + potatoPerPound * potato) + " without a discount."));
    alert("Your total with a discount is: " + " $" + (parseFloat(tofuPerPound * tofu + lambPerPound * lamb + potatoPerPound * potato)) -
        (.20 * (parseFloat(tofuPerPound * tofu + lambPerPound * lamb + potatoPerPound * potato))));
    alert("You saved " + " $" + .20 * (parseFloat(tofuPerPound * tofu + lambPerPound * lamb + potatoPerPound * potato)) + "! ");
}

console.log(random());
//need to make a function informing him of how much tofu he's buying by weight in pounds
//and with the price in pounds


function totalTofu(tofuNum){
    return "You are buying " + tofuNum + " pounds of tofu." +
        " The price for each pound is " + tofuPerPound + ".";
}

//repeat above but for lamb

function totalLamb(lambNum){
    return "You are buying " + lambNum + " pounds of lamb." +
        " The price for each pound is " + lambPerPound + ".";
}


//repeat for potatoes
function totalPotato(potatoNum){
    return "You are buying " + potatoNum + " pounds of potatoes." +
        " The price for each pound is " + potatoPerPound + ". ";
}

function totalPoundage(){
   return totalTofu() + totalLamb() + totalPotato();
}


// now i need to inform rodrigo how much the total he's for everything, and how much he is saving
function rodrigoShopping(num_one, num_two, num_three){
    return totalPoundage() + "Your total is: " + (tofuPerPound * parseFloat(num_one))
        + (lambPerPound * parseFloat(num_two)) + (potatoPerPound * parseFloat(num_three)) * .20 + ".";
}



/*!!! ALGEBRA HEAVY !!!
Jimmy wants to buy and sell some metal.
If he has two and a half pounds he can
 smelt it into an ingot and sell back the metal
for triple the profit. Any metal he has,
 he can sell back for a thirty percent loss.
  Jimmy will alway make an ingot if he can,
and will sell all of the metal he has, ingot or not.
 The metal Jimmy wants to smelt is priced at fifteen dollars per eight
ounces. Create a function that will take in an amount of money,
in dollars, that will return how much money Jimmy made from
his investment.*/


/*Georgia wants to run a marathon.
She is able to run at a speed of 10.75 km/hr for an hour,
 but her speed decreases by half of
a mile per hour every forty-five minutes.
 Georgia will only ever run as slow as 1 km/hr.
 How long will it take for Gerogia to
finish her race? Return a string saying how
 many hours it will take for Georgia to
  complete her run for a given distance, in miles.*/