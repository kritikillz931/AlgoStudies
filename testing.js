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
            console.log(sortedArray)
        }
    }
    return sortedArray;
}
solution(numbers)
// S O L V E D
// -------------------------------------------------------------


