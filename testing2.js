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

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.


//Name Calculate Average
const array1 = [1, 1, 1]
function find_average(array) {
    let average = []
    let empArr = 0
    if (array.length != 0) {
        let total = array.reduce(function (a, b) { return a + b })
        average.push(total)
        return average / array.length
    } else {
        return empArr
    }
}
//   find_average(array1)

// ------------------------------S O L V E D------------------------------ \\

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

const arrayA = [66, 101]
const valueX = 66
function check(arrayA, valueX) {
    if (arrayA.includes(valueX, 0)) {
      return true
    } else {
      return false
    }
  }
//   check(arrayA, valueX)
