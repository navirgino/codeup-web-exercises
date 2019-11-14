"use strict";


//TODO: Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

const wait = (num => {

    return new Promise((resolve, reject) => {
        setTimeout(num => {
            resolve()
        }, num);
    })

});


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(2000).then(() => console.log('You\'ll see this after 2 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 second'));


function getLastCommit (un){
    fetch(`https://api.github.com/users/${un}/events`, {headers: {'Authorization': `token ${gitHubKey}`}})
        .then(response => response.json())

        .then(usernames => {
            let filter = usernames.filter(u => u.type === "PushEvent");
            console.log(`${un} last commit was on ` + filter[0].created_at);
        });

}

getLastCommit('navirgino');