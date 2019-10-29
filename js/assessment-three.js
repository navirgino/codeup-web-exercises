// "use strict";
//
// //Write a function named 'typeOfValue' takes in a value andreturns its type.
//
// function typeOfValue(value){
//     console.log(typeof value);
// }
//
//
// typeOfValue("hello") ;// "string"
// typeOfValue(123) ;// "number"
// typeOfValue([]); // "object"
// typeOfValue([4,5,6]); // "object"
//
// //Write a function 'isPositive' that takes in a number and returns `true` or
// //  `false` based on whether the input is positive.
//
// function isPositive(number){
//     console.log(number > 0);
//
// }
//
// isPositive(2); // true
// isPositive(-4); // false
// isPositive(0); // false
//
//
// // Write a function 'removeElement' that takes in an array and a value, and
// // returns an Array with the first instance of the indicated value removed.
//
// function removeElement(arr, instance){
//     var index = arr.indexOf(instance);
//
//     var newArr = arr.slice(0, index)/*.concat(arr.slice(index + 1))*/;
//     // console.log(newArr);
//     //so here we are slicing 0 at the index
//     var secondArr = arr.slice(index + 1);
//     //now we are slicing the index + 1 because it starts at 0
//     // console.log(secondArr);
//     // now we concat
//     var finalArr = newArr.concat(secondArr);
//     console.log(finalArr);
//
//     //how take the literal value of 4 not the index?
//
// }
// removeElement([1,2,3,4,5], 4); // returns [1,2,3,5]
// removeElement([2,2,4,4,5], 2) ;// returns [2,4,4,5]
// removeElement([10], 10); // returns []
//
//
// //Write a function 'sumOfNumbers' that takes in an array of numbers and returns the
// //sum of all values
//
// var sumOfNumbers = function(input){
//     // if (toString.call(input)!== '[object Array]')
//     //     return false;
//         var total = 0;
//         for(var i=0; i<input.length; i++){
//             if(isNaN(input[i])){
//                 continue;
//             }
//             total += Number(input[i]);
//         }
//         return total;
// };
//
// console.log(sumOfNumbers([1, 2, 3, 4, 5]));
// console.log(sumOfNumbers([-1, 15]));
//
// // Write a function 'evensIndex' that takes in an array of numbers and returns
// //  an array containing the index values of all even numbers.
// function evensIndex(arr){
//     var evenArr = [];
//     for (var i = 0;i<arr.length;i++){
//         if(arr[i]%2 === 0)
//             console.log(arr.indexOf());
//             evenArr.push(i);
//     }
//     return evenArr;
// }
//
// console.log(evensIndex([1, 2, 3, 4, 5, 6])); // returns [1,3,5]
// console.log(evensIndex([3, 7, 11, 12])); // returns [3]
// console.log(evensIndex([5, 5, 7, 13])); // returns []
//
// //Write a function 'stringToArray' that takes in a comma separated list and
// // returns it as an array.
// function stringToArray(str){
//     return str.split(',');
// }
//
// console.log(stringToArray("red,orange,yellow,green,blue")); // returns ['red','orange', 'yellow','green','blue']
// console.log(stringToArray("1,2,3")); // returns ['1','2','3']
// console.log(stringToArray("dog"));// returns ['dog']
//
// // Given the following array of objects, write a function 'findUsers' that
// // returns
// //  an
// // Array of usernames.
//
// var myMac = {};
// myMac.users = [
//     {
//         username: "sophie",
//         id: 1
//     },
//     {
//         username: "vivian",
//         id: 2
//     },
//     {
//         username: "david",
//         id: 3
//     }
// ];
//
//
// console.log(myMac.users); // returns ['sophie','vivian','david']
// console.log(myMac.users[0].username);
//
//
//     var findUsers = myMac.users.map(function(a){
//        return a.username;
//     });
// console.log(findUsers);
//
//
// //- Write a function 'addRole' that accepts the array of objects, then adds the
// //  property 'role' to each object with a value of 'instructor.' The
// //  results should look like this:
//
// /*addRole("instructor");
//
// [
//     {
//         username: "sophie",
//         id: 1,
//         role: "instructor"
//     },
//     {
//         username: "vivian",
//         id: 2,
//         role: "instructor"
//     },
//     {
//         username: "david",
//         id: 3,
//         role: "instructor"
//     }
//
// ];*/
//
// // console.log(addRole());
//
//
// //- Write a function 'countLetters' that takes in a string and a character, and
// //counts the number of instances of that character in the string.
// var countLetters = (function(str, char){
//     var result = 0;
//     for(var i = 0; i<str.length;i++){
//         if(str.toUpperCase().charAt(i) === char.toUpperCase() ||
//         (str.toLowerCase().charAt(i) === char.toLowerCase())){
//             result++
//         }
//     }return result;
//
// });
//
//
// console.log(countLetters("banana", "a")); // returns 3
// console.log(countLetters("Bob", "b"));// returns 2
// console.log(countLetters('oOoOoOoCcCc',"o"));
// console.log(countLetters("javascript", "x")); // returns 0
//
//
//
// ////- Write a function 'countAll' that takes in an array of strings and returns an
// //// array with the count of a character for each string. You may be able to use
// //// your countLetters function here.
// //
// //countAll(["banana", "html", "java"], "a") // returns [3,0,2]
// //countAll(["push", "your", "commits"], "u") // returns [1,1,0]
//
// var convertNameToObject = function(str){
//     var index = str.indexOf(" ");
//     //console.log(index);
//     var first = str.substr(0, index);
//     console.log(first);
//     var second = str.substr(index + 1);
//    // console.log(second);
//     var nameObj = {
//         firstName: first.toString(),
//         lastName: second.toString()
//     };
//     console.log(nameObj)
// };
//
// convertNameToObject('Harry Potter');
// convertNameToObject('Ron Weasley');
// convertNameToObject("Hermoine Granger");
//
var capitalizeName = function(str){
    var index = str.indexOf((" "));
    // var split = str.split(" ");
    var first = str.charAt(0).toUpperCase();
    console.log(first);
    // var second = str.charAt(index + 1).toUpperCase() + str.slice(index + 1);
    // console.log(second);

};
// // capitalizeName("nico virgino");
//
function uppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//
function capitalizeAllNames(str){
    for(var i = 0; i < str.length; i++){
        str[i] = str[i].toUpperCase;

    }
    console.log(str);
}
console.log(capitalizeAllNames(['yo yo', 'me me', 'Me mi', 'yuh ye']));
//
// // var capitalizeName = function(str){
// //     var index = str.indexOf(" ");
// //     var first = str.substr(0, index);
// //     console.log(uppercaseFirstLetter(first));
// //     var second = str.substr(index + 1);
// //     console.log(uppercaseFirstLetter(second));
// // };
//
// // console.log(capitalizeName("nico virgino"));


var averageSales = function(carts){
    var newArr = [];
    var split = split(" ");
    carts.forEach(function(sale){
        newArr = sale.sales;
    });
};
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// // 100