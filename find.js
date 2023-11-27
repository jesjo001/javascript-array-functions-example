const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function findNumber(number, index, array) {
    return number === 5
}
const result = numbers.find(findNumber)

console.log(result) // 5


// find an item from an array of object
const users = [{
        name: 'John',
        age: 34
    },
    {
        name: 'Amy',
        age: 20
    },
    {
        name: 'camperCat',
        age: 10
    }
];

const selectedItem  = users.find((user) => user.name === 'Amy')
console.log(selectedItem)