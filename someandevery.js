// The some() method of Array instances tests whether at least one element 
// in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element 
// for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// The syntax is as follows:  array.some(callback(element, index, array), thisArg);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function findNumber(number, index, array) {
    return number > 9
}

const result = numbers.some(findNumber)
// console.log(result) // true



// every() Method:

// The every() method tests whether all elements in the array pass the specified condition.
// It returns true if all elements satisfy the condition, and false otherwise.
// The syntax is similar to some():
// array.every(callback(element, index, array), thisArg);

const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15]

// function isOdd(number, index, array) {
//     return number % 2 === 0
// }

// const result1 = oddNumbers.every(isOdd)

//simplify with arrow function
const result2 = oddNumbers.every(number => number % 2 === 0)

console.log(result2) // true
