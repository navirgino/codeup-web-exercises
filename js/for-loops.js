"use strict";

// Create a function named showMultiplicationTable
// that accepts a number and console.logs
// the multiplication table for that number
// (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num){
    for(var i = 1; i < 11; i++){
        console.log((num + (" x ") + i + (" = ") + num*i));

    }
}

console.log(showMultiplicationTable(7));

/*7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70*/

/*###########################*/
//Use a for loop and the code
// from the previous lessons to
// generate 10 random numbers between 20
// and 200 and output to the console whether
// each number is odd or even. For example:

for(var i = 1; i<11; i++){
    var max = 200;
    var min = 20;
    var randomNum = Math.floor(Math.random() * (max - min)) + min;
    if(randomNum%2 == 0){
        console.log(randomNum + " is even!");
    }else if(randomNum%2 !== 0) {
        console.log(randomNum + " is odd!");
    }
}


/*###########################*/
//Create a for loop that uses console.log to create the output shown below.
for(var i = 1; i < 10; i++) {
    var empty = "";
    for(var length = 1; length <= i; length++) {
        empty += i;
    }console.log(empty);

}

for(i = 1; i <= 9; i++) {
    console.log(("" + i).repeat(i));
}
/*so cleannnnnnnnnnnnn ^^^^^*/

//i need to concatenate each i in a sequence of 9 rows
    //row one is fine
    //row two is 22
    //row three is 333
    //how can i make this happen???
    // i need a variable that represents the number it is on, and output
    // that total number concatenated




/*1
22
333
4444
55555
666666
7777777
88888888
999999999*/

/*#############################*/
//5. Create a for loop that uses
// console.log to create the output shown below.

for (var num = 100; num >= 5 ; num-=5) {
    console.log(num);
}


/*
100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5*/
