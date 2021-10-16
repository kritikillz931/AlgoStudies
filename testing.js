// Finish the solution so that it sorts 
// the passed in array of numbers. If the 
// function passes in an empty array or null/nil 
// value then it should return an empty array.

//Name - Number Sort
const numbers = [1, 2, 3, 10, 5]
function solution(nums) {
    let sortedArray = [];
    if (nums) {

        // if nums exist iterate through each number in the array by 1 index.                    
        for (let i = 0; i < nums.length; i++) {
            //push each number into the sortedArray
            sortedArray.push(nums[i])
            //sort each number from lowest to highest            
            sortedArray.sort((a, b) =>
                a - b
            )
        }
    }
    return sortedArray;
}
solution(numbers)
// S O L V E D
// -------------------------------------------------------------


// Given an integral number, determine if it's a square number

//Name - A Square Of Squares
const n = [-1, 0, 3, 4, 25, 26]
const squareNumbers = (n) => {
    let squareArray = [];
    //iterate through each number in n array
    for (let i = 0; i < n.length; i++) {
        //if index of n is greater than or equal to 0 AND 
        //the square root of index i is divisble by 1 with no
        //remainders, then push that number to squareArray.
        if (n[i] >= 0 && Math.sqrt(n[i]) % 1 === 0) {
            squareArray.push(n[i])
        }
    }
    console.log(squareArray)
    return squareArray
}
squareNumbers(n)
//S O L V E D
// -------------------------------------------------------------


// Given an array of positive integers (the weights of the people), 
// return a new array/tuple of two integers, where the first one is 
// the total weight of team 1, and the second one is the total weight of team 2.

//Name - Row Weights
const array = [10, 50, 150, 300, 40, 250]
const rowWeights = (array) => {
    let teamOneWeight = 0
    let teamTwoWeight = 0
    let teamWeights = [];
    //iterate through each index by 2 starting from beginning
    //add each 2nd indexes value together and store in teamOneWeight Variable 
    //store value of teamOneWeight in teamWeights Array.
    for (let i = 0; i < array.length; i += 2) {
        teamOneWeight += array[i]
    }
    teamWeights.push(teamOneWeight)
    //iterate through each index by 2 starting from index of 1
    //add each 2nd indexes value together and store in teamTwoWeight Variable 
    //store value of teamTwoWeight in teamWeights Array.
    for (let i = 1; i < array.length; i += 2) {
        teamTwoWeight += array[i]
    }
    teamWeights.push(teamTwoWeight)
    return teamWeights
}
rowWeights(array)
//S O L V E D
// -------------------------------------------------------------