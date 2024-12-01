//SCALABLE SORTING ALGORITHM - GUESS THE NUMBER

//Define the number range 
let nMin = 0
let nMax = 11

//Define the secret number X for the algorithm to find
let X = nMin + Math.floor(Math.random() * ((nMax + 1) - nMin))
console.log("Number X is " + X)


//Create an array to hold the number range [nMin...nMax]

let array = []

//populate the array

for (let i = nMin; i <= nMax; i++) {
    array.push(i)}

console.log(array)


//create a variable to store the midpoint of the array
let midpoint = Math.ceil((array.length -1) / 2)
console.log("array.length is " + array.length)
console.log("Midpoint is index position " + midpoint + " which is " + array[midpoint])

//Create a test to find the midpoint of the array and test if X is larger

function testRange() {
if (X >= array[midpoint]) {
    return true
} else {
    return false
}
}

//Integrate the test into a loop

let outputArray = []

 for (i in array) {
    if (testRange(i) == true) {
    if (i >= array[midpoint]) {outputArray.push(Number(i))};
    }
    else if (i < array[midpoint]) {outputArray.push(Number(i))};
    }

console.log(outputArray)

// if (X in array) {console.log(X)}

//Rewrite the loop to update the original array, using recursion to continue until the end condition (array.length) < 2

// while (outputArray.length >= 2);

// while (array.length >2) {
// for (i in array) {
//     if (testRange(i) == true) {
//         console.log(i)
//     if (i >= array[midpoint]) {array.push(i)};
//     }
//     else if (i < array[midpoint]) {array.push(i)};
//     }
// }

// console.log(array)

//Test to find out which is the number