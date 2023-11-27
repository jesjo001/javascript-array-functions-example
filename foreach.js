// The forEach method is used to iterate over the elements of an array 
// and execute a provided function once for each element in the array. 
// It is a commonly used method for performing operations on each element of an array 
// without the need for explicit loop constructs like for or while loops. 
// Here's a detailed explanation of how it works:


// The forEach method takes in a callback function and executes that callback function on each element of the array.
// The syntax for forEach is as follows:

// arr.forEach(function(currElement, index, arr){
//    // do something with currElement
// });
// This syntax is a bit confusing at first, so let's break it down:
// arr is the array that forEach was called on.
// currElement represents the current element in the array that the forEach method is operating on.
// index represents the index of currElement in the array.
// arr is the array that forEach was called on (again).

// The callback function can be declared separately and passed into the forEach method as a reference:



const numbers = [1, 2, 3, 4, 5];

function print(element) {
    console.log(element);
}

numbers.forEach(print); // prints 1 2 3 4 5

// Or it can be declared inline:
numbers.forEach(function (element) {
    console.log(element);
}); // prints 1 2 3 4 5

// The forEach method can also take in an optional second parameter which represents the value of this in the callback function:
// arr.forEach(function(currElement, index, arr){
//    // do something with currElement
// }, this);

this.name = "John";

numbers.forEach(function (element) {
    console.log(this); // prints window object
}, this);

// The forEach method can also take in an optional third parameter that represents the array that contains the elements we want to go through:
numbers.forEach(function(currElement, index, arr){
    console.log(currElement , index, arr);
});

//practical application of forEach
// The forEach method is commonly used to perform an operation on each element of an array.
// It is a good alternative to a traditional for loop when using an array.
// Because the forEach method works on each element, it is more

numbers.forEach(function (element) {
    if (element % 2 === 0) {
        console.log(element);
    }
});

console.log(numbers);




// things to remember
// There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
// forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.
// Calling the forEach() function on an empty array will not throw an error.
// The callback function is not invoked for the missing value at index 2.