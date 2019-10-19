"use strict";


// Exercise 1. Write a function called makeCar that takes in two strings, make and model,
// and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
function makeCar(makeStr, modelStr){
    var car = {
      make: makeStr,
      model: modelStr
    };
    return car;
}

console.log(makeCar("Toyota", "Camry"));
console.log(makeCar("VW", "beetle"));

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67

//TODO: Object needs to have the following: title, date, office, and employees.
//TODO: Employee property needs to be an array of objects
//TODO: Each employee should be represented by an obj with the follow properties
//                                  employee-number, first-name, last-name, sales-units

var salesReport = {
    title: "Monthly Sales Report",
    date: "03-17-2015",
    office: "Codeup",
    employees: [
        {
            employee: {
                empNum: "1",
                firstName: "Jane",
                lastName: "Janeway",
                salesInUnits: "3"
            }

        },
        {
            employee: {
                empNum: "3",
                firstName: "Tricia",
                lastName: "Triciason",
                salesInUnits: "5"
            }
        },
        {
            employee: {
                empNum: "4",
                firstName: "Jeannette",
                lastName: "Jeanson",
                salesInUnits: "4"
            }
        },
        {
            employee: {
                empNum: "5",
                firstName: "Charles Emmerson III",
                lastName: "Winchester",
                salesInUnits: "2"
            }
        },
        {
            employee: {
                empNum: "6",
                firstName: "Chet",
                lastName: "Chedderson",
                salesInUnits: "8"
            }
        },

        {
            employee: {
                empNum: "7",
                firstName: "Chaiam",
                lastName: "Chaiamson",
                salesInUnits: "12"
            }
        },

        {   employee: {
                empNum: "8",
                firstName: "Dale",
                lastName: "Dalesinger",
                 salesInUnits: "1"
            }
        },
        {
             employee: {
                empNum: "9",
                firstName: "Zig",
                lastName: "Ziglar",
                 salesInUnits: "50"
            }
        },
        {
             employee: {
                empNum: "10",
                firstName: "Henry",
                lastName: "Kissinger",
                 salesInUnits: "1"
            }
        },
        {
             employee: {
                empNum: "11",
                firstName: "Arthur Herbert",
                lastName: "Fonzarelli",
                 salesInUnits: "23"
            }
        },
        {
             employee: {
                empNum: "12",
                firstName: "Betty",
                lastName: "Boop",
                 salesInUnits: "67"
            }
        }
        ]
};

console.log(salesReport);


// TODO: Exercise 3. On the salesReport object you made, add the following methods.
// TODO: getEmployeeCount() should return the total number of employees
// TODO: getTotalNumberOfSales() should return the total number of units sold
// TODO: getAverageSalesPerEmployee() should return the average units sold per employee




// Exercise 4. Go to https://gist.githubusercontent.com/ryanorsinger/f77e5ec94dbe14e21771/raw/d4a1f916723ca69ac99fdcab48746c6682bf4530/profiles.json
// then copy the JSON and assign it to a variable named profiles.

// Exercise 5. Create an object named profileReport and add the following methods that use the "profiles" JSON data.
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  getInactiveCount() should return the number of inactive profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getLowestBalance() should return the customer name with the lowest balance
//  getHighestBalance() should return the customer name with the highest balance
//  getMostFavoriteFruit() should return the most common fruit
//  getLeastFavoriteFruit() should return the least favorite fruit
//  getTotalNumberOfUnreadMessages() should return the number of unread messages for all users
//  getAverageNumberOfUnreadMessages() should return the average number of unread mesages per user.
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.


// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
// Now create a variable named person2 and assign person1 to it.
// Then reassign the name property on person2 with person2.name = "Bob";
// console.log the name property on person 1.
// Why do you think changing person2 altered person1?
// The term for this behavior is assignment by reference.


// Exercise 7. More practice with assignment by reference
// Add the following HTML to your index.html page in this project.
// <input type="text" id="input" name="input">
// now, create a variable named input and assign it document.getElementById("input").
// now run input.value = "Hello" from the JS console. Did you see any HTML change?
// Create a second variable named inputElement.
// var inputElement = document.getElementById("input");
// now, run inputElement.value = "I am altering an object by altering its properties" in your JS console.
// See how both the "input" and "textInput" varialbes are referencing the same underlying HTML element?
// This behavior is another example of "assignment by reference"