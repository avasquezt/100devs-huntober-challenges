// This function receives an array and an element and moves that element to the start of the array 
function swapLeft(arr, element){
    return arr.sort((a, b) => a === element ? -1 : b === element ? 1 : 0);
}

// This function receives an array and an element and moves that element to the end of the array 
function swapRight(arr, element){
    return arr.sort((a, b) => a === element ? 1 : b === element ? -1 : 0);
}

// myArray = ['abc', 'xyz', 1, 2, 'Hey!'];
// console.log(myArray);

// swapLeft(myArray, 1);
// console.log(myArray);
// swapLeft(myArray, 'abc');
// console.log(myArray);

// swapRight(myArray, 1);
// console.log(myArray);
// swapRight(myArray, 'abc');
// console.log(myArray);

// myArray = ['abc', 'xyz', 1, 'abc', 2, 'Hey!'];
// console.log(myArray);

// swapLeft(myArray, 'abc');
// console.log(myArray);

// swapRight(myArray, 'abc');
// console.log(myArray);

module.exports = { swapLeft, swapRight};