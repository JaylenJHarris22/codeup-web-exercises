"use strict";

// let double = 2
// while (double < 65000){
//     console.log(double*=2)
// }

let totalCones = (Math.floor(Math.random() * 50) + 50);
console.log(`You have to sell ${totalCones} cones`)
do{
    var sold = Math.floor(Math.random() * 6) + 1
    totalCones-=sold
    if(totalCones < 0){
        console.log(`You can't sell ${sold} cones you only have ${totalCones + sold} left`)
        totalCones+=sold
    }else if (totalCones === 0){
        console.log('Yay you sold all the cones')
    }else {
        console.log(`You sold ${sold} cones`)
    }
}while (0 < totalCones){

}