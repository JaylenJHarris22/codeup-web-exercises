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

const multiLanguage = users.filter( (e)=> {
    return e.languages.length >= 3;
});

const emails = users.map( e => {
    return e.email;
})

const averageYearsExperience = users.reduce((total, current) =>{
    return total + current.yearsOfExperience / users.length;
}, 0)
console.log(averageYearsExperience)
const numbers = [1, 2, 3, 4, 5];

// const email = users.email.s
const longestEmail = users.reduce((x, y) => {
    return x.email.length > y.email.length ? x : y;
}).email
console.log(longestEmail)

const instructors = users.reduce((x, y) => {
    x.push(y.name);
    return x
}, [])
console.log(`Your instructors are: ${instructors}`)



