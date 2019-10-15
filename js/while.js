"use strict";

//make a loop that multiplies by itself


/*
var i = 2;
while(i<65537){
    console.log(i);
    i *=2;
}
*/

/*
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
*/

// create a js program that generates a random number between 50 and 100
// generate numbers between 1 and 5
// This is how you get a random number between 50 and 100
// amount of cones to sell
// This expression will generate a random number between 1 and 5


 // amount of cones to sell
// generate code that generates numbers between 1 and 5, simulating the amount of cones
// being bought by her clients.
// log to the console the amount of cones sold to each person
do {

    var allCones = Math.floor(Math.random() * 50) + 50;

    var conesRequested = Math.floor(Math.random() * 5) + 1; //request cone(s) per person

    console.log(allCones + " cones available.");

    if(allCones > conesRequested){

        console.log("I sold " + conesRequested + " cones.");

    }else if(conesRequested > allCones){
        // if there are not enough cones
        console.log("Cannot sell you " + conesRequested + " I only have " + allCones + " left." )

    }else if (allCones === 0){
        //once cones are sold out
        console.log("Yay I sold them all!!!!!!!!!");

    }
    allCones++;

    console.log(allCones - conesRequested + " cones remain.");

}while(allCones > 0);


/*
5 cones sold...  // if there are enough cones

Cannot sell you 6 cones I only have 3...  // If there are not enough cones

Yay! I sold them all! // If there are no more cones*/

