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


/*function median(numbers){
    //get the median
    //get the average value
    var median = 0;
    var numsLen = numbers.length;
    numbers.sort();
    if(numsLen%2===0){
        median = (numbers[numsLen / 2.0 - 1.0] + numbers[numsLen / 2]) / 2.0;
    }else {
        median = parseFloat(numbers[(numsLen - 1.0) / 2.0]);
    }
    return median.toFixed(1);

}


console.log(median([1, 2, 3, 4, 5])); //3.0
console.log(median([1, 2, 3])); //2.0
console.log(median([1, 5, 6])); //5.0
console.log(median([1, 2 , 5 , 6])); //3.5*/
/*

function maxMinusMin(numbers) {
    var result = [];
    for (var i = 0; i <= numbers.length; i++) {
            result[i] = Math.max(numbers) - Math.min(numbers);

    }
}
function getMin(number){

    return Math.min.apply(null, number);
}
function getMax(number){

    return Math.max.apply(null, number);
}
*/

/*function maxMinusMin(numbers){
    var max = Math.max.apply(null, numbers);
    var min = Math.min.apply(null, numbers);
    return max - min;
}

console.log(maxMinusMin([1,2,2,8,3,4])); //7*/

/*
function productOfAll(numbers) {
   var p = 1;
   for(var i = 0; i < numbers.length; i+=1){
       p *= numbers[i];
   }return p ;

}

console.log(productOfAll([1, 2, 3]));
console.log(productOfAll([3, 4, 5]));
console.log(productOfAll([2, 2, 3, 0]));
*/

function onlyOddNumbers(num){
    var oddArr = [];
    for (var i = 0; i < num.length; i++){
        if((num[i]%2) !== 0){
           return oddArr.push(num[i]);
        }
    }

}

console.log(onlyOddNumbers([1, 2, 3]));
console.log(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));
console.log(onlyOddNumbers(-4, -3, -1));