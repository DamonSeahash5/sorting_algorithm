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
    if (i >= array[midpoint]) {outputArray.push(i)};
    }
    else if (i < array[midpoint]) {outputArray.push(i)};
    }

console.log(outputArray)

//If yes, output [nMax/2....nMax]
//If No, output [nMin...nMax-1]

//Embed the loop in a function

//Use recursion to repeat the looping & testing until only two numbers are remaining in the array

//Test to find out which is the number