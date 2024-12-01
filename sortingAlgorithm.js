//SCALABLE SORTING ALGORITHM - GUESS THE NUMBER

//Define the number range 
let nMin = 0
let nMax = 10

//Define the secret number X for the algorithm to find
let X = nMin + Math.floor(Math.random() * ((nMax + 1) - nMin));
console.log("Number X is " + X)


//Create an array to hold the number range [nMin...nMax]

let array = []

//Create a loop to find the midpoint of the array and test if X is larger

//If yes, output [nMax/2....nMax]
//If No, output [nMin...nMax-1]

//Embed the loop in a function

//Use recursion to repeat the looping & testing until only two numbers are remaining in the array

//Test to find out which is the number