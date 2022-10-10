// This function moves the elements including 'a' to the start of the array, and those with length greater than 3 to the end

// Using sort
function arrangeString(arr){
    return arr.sort((a,b) => (b.includes('a') || a.includes('a')) ? (b.includes('a') - a.includes('a')) : Math.sign(Math.max(0, a.length - 3)) - Math.sign(Math.max(0, b.length - 3)));
}

// Using filter
// function arrangeString(arr){
//     return arr.filter(n => n.includes('a')).concat(arr.filter(n => !n.includes('a') && n.length <= 3)).concat(arr.filter(n => !n.includes('a') && n.length > 3));
// }

// let arr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'];
// console.log(arrangeString(arr));

// let arr = ['hi', 'hello', 'howdy', 'hola', 'hai', 'hej', 'hallo', 'heyyy'];
// console.log(arrangeString(arr));

module.exports = {arrangeString};