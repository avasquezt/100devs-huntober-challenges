// This functions moves the given element one row up on the array
function moveUp(arr, e){
    let pos, idx = arr.findIndex(n => [n.includes(e), pos=n.indexOf(e)][0]);
    return idx > 0 ? (arr[idx].splice(pos,1,arr[idx - 1][pos]), arr[idx - 1].splice(pos,1,e), arr) : arr;
}

// This functions moves the given element one row down on the array
function moveDown(arr, e){
    let pos, idx = arr.findIndex(n => [n.includes(e), pos=n.indexOf(e)][0]);
    return idx < (arr.length - 1) ? (arr[idx].splice(pos,1,arr[idx + 1][pos]), arr[idx + 1].splice(pos,1,e), arr) : arr;
}

// let arr = [[0,1,2],[3,4,5],[6,7,8]];

// // console.log(moveUp(arr, 8));
// // console.log(arr);

// console.log(moveDown(arr, 4));
// console.log(arr);

module.exports = { moveUp, moveDown };