"use strict";

/*********************************************
 *              .map
 ******************************************** */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//callback function = anonymous function being passed into an array


//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

let newArray = numbers.map(num => num + 1);

console.log(newArray);
//TO DO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.

let timesThreeArray = numbers.map(num => num * 3);

console.log(timesThreeArray);
/*********************************************
 *              .filter
 ******************************************** */
const binary = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'

let trueBinary = binary.filter(num => num == true);

console.log(trueBinary);


// TO DO: filter through binary again and this time, return all the false
// values.
let falseBinary = binary.filter(num => num == false);

console.log(falseBinary);


const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TO DO: filter through the array of objects and return all fruit type
// objects.

let fruits = fruitsAndVeggies.filter(fruit => fruit.type === "fruit");
console.log(fruits);

// TO DO: filter through the array of objects and return all vegetable type
// objects.

let veggies = fruitsAndVeggies.filter(veggie => veggie.type === "vegetable");

console.log(veggies);

/*********************************************
 *              .reduce
 ******************************************** */

// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.

let singleVal = numbers.reduce((a, b) => a + b);
console.log(singleVal);

// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.

let subtractVal = numbers.reduce((a, b) => {
    return a - b
}, 100);
console.log(subtractVal);

let shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    }, {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    }, {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TO DO: Using .reduce, return the total number of apples.

const totalApples = shoppingCarts.reduce((runningTotal, elementCurrentlyOn) => {
    return runningTotal + elementCurrentlyOn.apples
}, 0);

console.log(totalApples);

//accumulation = 0
//add 1
//acc = 1
//add 2
//acc = 3
//add 3
//acc = 6
//add 4
//acc =10
//add 5


// TO DO TOGETHER: let's use .reduce to return an object that has properties
// representing total values for each fruit.
// const totalFruit = shoppingCarts.reduce((a,b) => {
//     let fruitBucket = [];
//     for(let fruit of fruits){
//         fruitBucket.push(fruit.name);
//     }
//     return fruitBucket;
//
// });

// const totalValFruit = shoppingCarts.reduce((a, b) => {
//     return
// })
//
// console.log(totalFruit);


const colors = ['red', 'orange', 'red', 'blue', 'blue', 'green', 'red'];

// TO DO: Count the number of times a color appears in this Array. Hint:
// your initial value should be an empty object.
const colorCountObj = colors.reduce((colorCounts, color) => {
    if (typeof colorCounts[color] === 'undefined') {
        colorCounts[color] = 1;
    } else {
        colorCounts[color] += 1;
    }
    return colorCounts;
}, {});

console.log(colorCountObj);


const lyrics = ['we', 'all', 'live', 'in', 'a', 'yellow', 'submarine'];

//TO DO TOGETHER: Using reduce, let's turn this into a string.

const oneLine = lyrics.reduce((currentString, word) => {
    return `${currentString} ${word}`
}, "");
console.log(oneLine);


// Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    }, {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    }, {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    }, {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    }, {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

const uniqueFurColors = hamsters.map(fur => {
    let furBucket = [];
    for(let hamster of fur.fur){
        if(fur.fur.length > 1){
            furBucket.push(fur.fur);
        }
        return furBucket;
    }
    //
    // if(fur.fur.length < 1)
    // furBucket.push(fur.fur);
    // return furBucket;


});
console.log(uniqueFurColors);

