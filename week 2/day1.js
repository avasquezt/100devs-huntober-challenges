// This function compares all the nested elements in two arrays
function compareNestedArrays(arr1, arr2){
    return arr1.every((arr, i) => 
                arr.every((element, j) => 
                    element == arr2[i][j]
                )
            );
}

// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']];
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']];
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']];
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']];

// console.log(compareNestedArrays(arr1, arr2)); //true
// console.log(compareNestedArrays(arr1, arr3)); //false
// console.log(compareNestedArrays(arr1, arr4)); //false

module.exports = { compareNestedArrays };