"use strict";

//Write a function named 'typeOfValue' takes in a value andreturns its type.

function typeOfValue(value){
    console.log(typeof value);
}


typeOfValue("hello") ;// "string"
typeOfValue(123) ;// "number"
typeOfValue([]); // "object"
typeOfValue([4,5,6]); // "object"

//Write a function 'isPositive' that takes in a number and returns `true` or
//  `false` based on whether the input is positive.

function isPositive(number){
    console.log(number > 0);

}

isPositive(2); // true
isPositive(-4); // false
isPositive(0); // false


// Write a function 'removeElement' that takes in an array and a value, and
// returns an Array with the first instance of the indicated value removed.

function removeElement(arr, instance){
    var newArr =[];
    var index = arr.indexOf(instance);
    console.log(index);
    if(index > -1){
      newArr = arr.slice(instance, 1);

    }console.log(newArr);

}

removeElement([1,2,3,4,5], 4); // returns [1,2,3,5]
removeElement([2,2,4,4,5], 2) ;// returns [2,4,4,5]
removeElement([10], 10); // returns []