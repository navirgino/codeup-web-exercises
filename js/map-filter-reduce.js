"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLang = users.filter(language => language.languages.length >= 3);
console.log(threeLang);

//TODO: Use .map to create an array of strings where each element is a user's email address

const email = users.map(e => e.email);
console.log(email);

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//
let yrOfExp = users.map(year => year.yearsOfExperience);
console.log(yrOfExp);


console.log(yrOfExp.reduce((a, b) => a + b / 5));


let totalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
},0);
let averageExp = totalYearsOfExperience / users.length;
console.log(totalYearsOfExperience);
console.log(averageExp);


//TODO: Use .reduce to get the longest email from the list of users.
//ternary reminder:
// condition ? expressionIfTrue : expressionIfFalse


// so if email length is greater than total email length -> conditional total : email


const longestEmail = users.reduce((a, b) => {
    let longest =  a.email.length > b.email.length ? a : b;
    return longest;
});

let longEmailBoi = emails.reduce((longest, email) => {
    if(email.length > longest.length) {
        return email;
    }else {
        return longest;
    }
}, "");

console.log(longestEmail);



//TODO: Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

const singleString = users.reduce((a, b) => {
    return a + b.name + ", ";
} ,"Your instructors are: ");

console.log(singleString);

const singleStr = users.reduce((a, b) => {
   return `${a}, ${b.name}`
}, "Your instructors are: ") + ".";

console.log(singleStr);

//TODO: BONUS: User .reduce to get the unique list of languages from the list of users.

let listOfLanguages = Array.from(users.reduce((accumulator, user) => {
    user.languages.forEach(language => accumulator.add(language));
    return accumulator;
}, new Set()));

console.log(listOfLanguages);

