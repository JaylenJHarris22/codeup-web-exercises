"use strict";

// console.log('hey guys!')

console.log('Hello from external JavaScript');

// alert('Welcome to my website!');

// let userColor = prompt('What is your favorite color?');

// console.log(`Great, ${userColor} is also my favorite color`);

let rentalRate = 3
let littleMermaidCost = Number(prompt('How many days did you keep The Little Mermaid movie?')) * rentalRate;
let brotherBearCost = Number(prompt('How many days did you keep the Brother Bear movie?')) * rentalRate;
let herculesCost = Number(prompt('How many days did you keep the Hurcules movie?')) * rentalRate;
let total = littleMermaidCost + brotherBearCost + herculesCost;
console.log(total);

let googlePay = Number(prompt('How many hours did you work for google?'));
let amazonPay = Number(prompt('How many hours did you work for amazon?'));
let facebookPay = Number(prompt('How many hours did you work for facebook?'));
let weeklyCheck = 350 * facebookPay + 400 * googlePay + 380 * amazonPay;
console.log(weeklyCheck);

let scheduleFree = confirm('Do you have you have any room for more classes');
let conflictingClass
if(!scheduleFree){
    console.log('You can\'t attend this class');
}else{
    conflictingClass = confirm('Do you have a class from 11:15 am to 1:45pm?')
    if (scheduleFree && !conflictingClass){
        console.log('You can enroll');
    }else{
        console.log('You cannnot attend this class');
    }
}


let premMember = confirm('Are you a premium member?');
if(!premMember) {
    let purchaseItems = prompt('How many things did you buy?');
    if (purchaseItems < 2) {
        console.log('You don\'t qualify for discount');
    } else if (purchaseItems >= 2) {
        let validCoupon = confirm('Is your coupon expired?');
        if(validCoupon){
            console.log('You get the discount.');
        }
    }
}


