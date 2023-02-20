/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

    // let rando = Math.floor(Math.random() * 500)
let rando = 2
    console.log(rando);
    function isTwo (rando){
    if(rando == 2){
            console.log(true);
        }else{
            console.log(false)
        }
    }

    isTwo(rando);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip (total, percentage){
    let tip = (total * percentage).toFixed(2);
    console.log(tip);
}
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let total = Number(prompt('How much was your meal?'))
let percentage = Number(prompt('What percentage of your total would you like to tip?'))
calculateTip(total, percentage)
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
let originalPrice = total;
let discountPercentage = Number(prompt('What was the percentage between 0 and 1'))

function applyDiscount (originalPrice, discountPercentage){
    let price = originalPrice * (1 - discountPercentage);
    console.log(price.toFixed(2))
}