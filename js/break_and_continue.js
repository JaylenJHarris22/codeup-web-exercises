"use strict";

let skip = Number(prompt('Pick a odd number between 1 and 50.'))
while(skip === ''|| skip < 1 || skip > 50 || skip %2 === 0 || isNaN(skip)){
    skip = Number(prompt('Pick a odd number between 1 and 50.'))
    console.log(skip)
}

for(let i = 1;i < 50; i+=2){
    if (i === skip){
        console.log(`Yikes skipping ${skip}.`)
        continue
    }
    console.log(`Here is a odd number ${i}`)
}