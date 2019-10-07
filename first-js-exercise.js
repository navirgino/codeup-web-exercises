/*You have rented some movies for your kids:
    The little mermaid (for 3 days), Brother Bear
(for 5 days, they love it), and Hercules (1 day,
    you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?*/

/*function totalPrice() {
    var pricePerDay = 3.00;
    var bear = 5 * pricePerDay;
    var herc = pricePerDay;
    var mermaid = 3 * pricePerDay;
    return bear + herc + mermaid;
}
console.log(totalPrice());*/

/* David's walk through*/
var lMRental = 3;
var bBRental = 5;
var hercRental = 1;
var totalRental = lMRental + bBRental + hercRental;
var totalCost = 3 * totalRental;

/*
Suppose you're working as a contractor for 3 companies:' +
' Google, Amazon and Facebook, ' +
'they pay you a different rate per hour. ' +
'Google pays $400, Amazon $380, and Facebook $350. ' +
'How much will you receive in payment for this week? ' +
'You worked 10 hours for Facebook, 6 hours for Google and ' +
'4 hours for Amazon.*/
/*var googlePay = 400.00;
var amazonPay = 380.00;
var facebookPay = 350.00;
sum = googlePay + amazonPay + facebookPay;*/

var googRate = 400;
var fbRate = 350;
var zonRate = 380;
var googHr = 6;
var fbHr = 10;
var zonHr = 4;
var googMoney = googHr * googRate;
var fbMoney = fbHr * fbRate;
var zonMoney = zonHr * zonRate;
var finalPurse = zonMoney + fbMoney + googMoney;



/*
A student can be enrolled in a class only if the class is
not full and the class schedule does not conflict with
    her current schedule.*/
// var currentSchedule = 50;
// var classSchedule = 100;
// var enrollment = currentSchedule != classSchedule;
// return enrollment;
var classTime = "9AM";
var classSize = 125;
var currClassSize = 108;
var studentClassTime = "9AM";
var studentCanSignUp = currClassSize < classSize &&
    classTime !== studentClassTime;


/*A product offer can be applied only
if a person buys more than 2 items,
    and the offer has not expired.
    Premium members do not need to buy a
specific amount of products.*/
/*items = 3.00;
NormOffer = items >= 2;
PremMem = 0;*/

var offerValid = true;
var cart = 3;
var premiumMember = false;
var canHasDiscount = offerValid && (cart >= 2 || isPremiumMember);


/*
* 4.)
*
* */
var username ='codeup';
var password = 'notastrongpassword';
password.length >= 5 && password.indexOf(username) === -1 &&
username.length <= 20 && username === username.trim() && password.trim();

/**/


function userReq(str1){
    if (str1.length > 20){
        return "Shorten username to less than 20"
    } else {
        return true;
    }
}
console.log(userReq('codeup'));

function passwordReq(str2){
    if (str2.length < 5) {
        return "Minimum password count is 5";
    } else {
        return true;
    }
}
console.log(passwordReq('notastrongpassword'));


