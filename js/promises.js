"use strict";


//TODO: Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

// const wait = (num => {
//
//     return new Promise((resolve, reject) => {
//         setTimeout(num => {
//             resolve()
//         }, num);
//     })
//
// });
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(2000).then(() => console.log('You\'ll see this after 2 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 second'));

 function getGithubUsernames() {
    return fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(users => users.map(user => user.login))
}

getGithubUsernames().then((usernames) => {
    usernames.forEach((username) => {
        console.log(username)
    });
}).catch(error => console.error(error));

console.log(getGithubUsernames('n'));


