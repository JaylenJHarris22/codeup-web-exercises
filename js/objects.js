"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
let person ={
    firstName:'Rick',
    lastName:'Ross',
}
console.log(`${person.firstName} ${person.lastName}`)
/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
person.sayHello = function (){
    return(`Hello from ${person.firstName} ${person.lastName}`)
}
console.log(person.sayHello())
/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

shoppers.forEach( shop => {
    // console.log(shop.amount)
    if (shop.amount >= 200){
        let total = shop.amount * .88
        console.log(`Hello ${shop.name} you qualified for our discount your total before was ${shop.amount} now it is ${total}`)
    }else{
        let total = shop.amount
        console.log(`Hello ${shop.name} your total is ${total}`)
    }

})
console.log()

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
let books = [
    {title:'The Princess Trials', author: {firstName:'Cordelia', lastName:'Castel'}},
    {title:'The Amnesia Experiment', author: {firstName:'Caroline', lastName:'Wei'}},
    {title:'Uglies', author: {firstName:'Scott', lastName:'Westerfeld'}},
    {title:'The Red Pyramid', author: {firstName:'Rick', lastName:'Riordan'}},
    {title:'The Throne of Fire', author: {firstName:'Rick', lastName:'Riordan'}},
];
/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
books.forEach( (value, index, array) =>{
    console.log(
`         Book # ${index + 1}
         Title: ${value.title}
         Author: ${value.author.firstName} ${value.author.lastName}
         ---`
    )
});
/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */

// (function createBook (){
//     let titleAdd = prompt('What is the title of book');
//     let firstNameAdd = prompt('What is the author\'s first name?');
//     let lastNameAdd = prompt('What is the author\'s last name');
//     let book = {title: titleAdd, author: {firstName: firstNameAdd, lastName: lastNameAdd}}
//     console.log(book)
// })();

// (function createBook (){
//     let titleAdd = prompt('What is the title of book');
//     let firstNameAdd = prompt('What is the author\'s first name?');
//     let lastNameAdd = prompt('What is the author\'s last name');
//     books.push({title: titleAdd, author: {firstName: firstNameAdd, lastName: lastNameAdd}})
// })();

(function showBookInfo (){
    books.forEach( book =>{
        console.log('Title: ' + book.title + ' Author: ' + book.author.firstName + ' ' + book.author.lastName)
    })
})()