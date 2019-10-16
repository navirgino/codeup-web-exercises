"use strict";
//




/*for(var userInput = prompt("Please input an odd number"); userInput>0; userInput--){
    if(userInput%2 !==0){
      break;
    }
    for(var b = 1; b > 50; b--) {
        continue;
        if (b % 2 === 0) {

        } else {
            console.log("Yikes! Skipping number: " + b);
            console.log(b);
        }
    }
}*/



for (var a = 1; a < 50; a++) {
    var userInput = prompt("Please input an odd number between 1 and 50: ");
    if (userInput % 2 !== 0) {
        break;
    }
}

 for(var b= 1; b < 50; b++){
     if(b == a){

         console.log("Yikes! Skipping number: " + userInput);

         continue;
     }

     console.log(b);
 }

