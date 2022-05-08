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
        //push each number into the sortedArray
        //sort each number from lowest to highest            
        for (let i = 0; i < nums.length; i++) {
            sortedArray.push(nums[i])
            sortedArray.sort((a, b) =>
                a - b
            )
        }
    }
    return sortedArray;
}
//  solution(numbers)

// ------------------------------S O L V E D------------------------------ \\


// Given an integral number, determine if it's a square number

//Name - A Square Of Squares
const n = [-1, 0, 3, 4, 25, 26]
const squareNumbers = (n) => {
    let squareArray = [];
    //iterate through each number in n array
    //if index of n is greater than or equal to 0 AND 
    //the square root of index i is divisble by 1 with no
    //remainders, then push that number to squareArray.
    for (let i = 0; i < n.length; i++) {
        if (n[i] >= 0 && Math.sqrt(n[i]) % 1 === 0) {
            squareArray.push(n[i])
        }
    }
    return squareArray
}
// squareNumbers(n)

// ------------------------------S O L V E D------------------------------ \\

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
// rowWeights(array)

// ------------------------------S O L V E D------------------------------ \\

// Given a list of digits, return the smallest number that could be formed
// from these digits, using the digits only once (ignore duplicates).

//Name - Form the Minimum
const values = [4, 7, 5, 7]
const minValue = (values) => {
    let sortedArray = []
    //Remove duplicates from array and store in noDupes Variable
    //sort noDupes variable from lowest to highest and store in sortedArray array
    //convert sortedArray integers to a string, remove commas, and rejoin numbers as whole number
    //and store in str variable
    //convert string to integer and store in answer variable
    let noDupes = [...new Set(values)]
    sortedArray = noDupes.sort((a, b) => a - b)
    let str = sortedArray.toString().split(",").join("")
    let answer = parseInt(str)

    return answer
}
// minValue(values)

// ------------------------------S O L V E D------------------------------ \\

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.

//Name - Small Enough?
const a = [78, 117, 110, 99, 104, 117, 107, 115]
const limit = 100
const smallEnough = (a, limit) => {
    //setting current variable to true
    //iterate through the array and compare if less than or equal to limit
    //if less than or equal to, continue through the for loop
    //if value is greater than 100 change current value to false.
    let current = true
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= limit) {
            continue
        } else {
            current = false
        }
    }
    return current
}
// smallEnough(a, limit)

// ------------------------------S O L V E D------------------------------ \\

// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Name - Friend Or Foe?
const friends = ["Ryan", "Kieran", "Mark"]
let newArray = []
const friend = (friends) => {

    // //iterate through each string in friends array. if strings character
    // length is equal to 4 characters then push it into the newArray. if not
    // ignore
    friends.map(f => {
        if (f.length == 4) {
            newArray.push(f)
        }
    }
    )
    return newArray
}
// friend(friends)

// ------------------------------S O L V E D------------------------------ \\

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//Name - Square(n) Sum
const numbersToSquare = [1, 2, 2]
function squareNum(numbersToSquare) {
    let total = 0
    let newArr = []
    for (let i = 0; i < numbersToSquare.length; i++) {
        sq = numbersToSquare[i] * numbersToSquare[i]
        newArr.push(sq)
        console.log(newArr)
    }
    for (let i in newArr) {
        total += newArr[i]
    }
    console.log(total)
    return total
}
// squareNum(numbersToSquare)

// ------------------------------S O L V E D------------------------------ \\