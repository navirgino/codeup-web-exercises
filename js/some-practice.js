"use strict";
/*function firstToLast(sequence){
    var removeFirst= sequence.shift();
    var pushIt = sequence.push(removeFirst);
    var newArr = [pushIt];
    return [newArr, sequence]
}*/
/*
function firstToLast(sequence){
    var removeFirst = sequence.shift();
    var pushIt = sequence.push(removeFirst);
    return [sequence, pushIt][0];

}


console.log(firstToLast([1, 2, 3, 4]));
console.log(firstToLast(["JS", "is", "awesome"]));*/


// Exercise 60
// Write a function definition named
// sumAll that takes in sequence of numbers and returns all the numbers added together.
/*sumAll = function(arr){
    return arr.reduce(function(a,b){
        return a + b
    }, 0);
};

function sumAll(arr){
    sumAll = function(arr){
        return arr.reduce(function(a,b){
            return a + b
        }, 0);
    };
}*/
/*

function sumAll(arr){
   var newSum = arr.reduce(function(a,b){
        return a+b;
    });
    return newSum;
}

console.log(sumAll([1,2,3,4]));
console.log(sumAll([3, 3, 3]));
console.log(sumAll([0, 5, 6]));*/

// Exercise 62
// Write a function definition named median that
// takes in sequence of numbers and returns the average value
/*
function median(numbers) {
    for (var i = 0; i < numbers.length; i++); {
        var avg = (numbers[i] / numbers.length) * numbers.length;
        return !isNaN(parseFloat(avg));
    }
}

console.log(median(1,2,3,4,5));
*/
/*/ Write a function definition named sumAll
 that takes in sequence of numbers and returns
 all the numbers added together.*/

/*
function sumAll(input){
    if (toString.call(input) !== "[object Array]")
        return false;
            var total = 0;
            for(var i=0; i<input.length;i++){
                if(isNaN(input[i])){
                    continue;
                }
                total += Number(input[i]);
            }
            return total;

}

console.log(sumAll([1,2,3,4]));
console.log(sumAll([3, 3, 3]));
console.log(sumAll([0, 5, 6]));*/


/*function mean(numbers) {
    var sum = 0;
    if(!numbers.length){
        return sum;
    }
    for (var i = 0; i < numbers.length; i++); {
        sum +=numbers[i];
    }
    return sum / numbers.length;
}

console.log(mean([1, 2, 3, 4]));*/

/*function mean(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum +=numbers[i];
    }
    return (sum / numbers.length) || 0;
}
console.log(mean([1, 2, 3, 4]));*/



/*
function median(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return ((sum / numbers.length)).toFixed(1) || 0;
}


console.log(median([1, 2, 3, 4, 5]));*/


