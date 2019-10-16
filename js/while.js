"use strict";

//2. make a loop that multiplies by itself


/*var i = 2;
while(i<65537){
    console.log(i);
    i *=2;
}*/

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
/*####################################################*/
// 3. create a js program that generates a random number between 50 and 100
// generate numbers between 1 and 5
// This is how you get a random number between 50 and 100
// amount of cones to sell
// This expression will generate a random number between 1 and 5

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones!");
do{

    // This expression will generate a random number between 1 and 5
    var conesOrdered = Math.floor(Math.random() * 5) + 1;

    if (allCones > conesOrdered){
        //this shows that if all cones in inventory is enough for the current demand
        //now i need to subtract that from inventory
        allCones -= conesOrdered;
        console.log("I sold " + conesOrdered + " cones! ");
        console.log("I have " + allCones + " left!")
    }else if(allCones < conesOrdered){
        //if i don't have enough inventory this is what happens
        console.log("Sorry I do not have " + conesOrdered + " cones. I only have " + allCones
        + " left.")
    }else {
        allCones -=conesOrdered;
        console.log("Yey I sold all the conez!!!!");
    }

}while(allCones>0);



/*####################################################*/
//3.Use a for loop and the code from the
// previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console
// whether each number is odd or even

