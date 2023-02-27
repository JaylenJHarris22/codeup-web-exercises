"use strict";

let skip = ''
if (skip === ''|| skip < 1 || skip > 50 || skip %2 !== 0){
    Number(prompt('Pick a odd number between 1 and 50.'))
}

for(let i = 1;i < 50; i+=2){
    if (i === skip){
        console.log(`Yikes skipping ${skip}.`)
    }
    console.log(`Here is a odd number ${i}`)
}