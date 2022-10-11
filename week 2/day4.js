// This functions moves the given element one row up on the array
function moveUp(arr, e){
    let pos, idx = arr.findIndex(n => [n.includes(e), pos=n.indexOf(e)][0]);
    return arr.map((n, i) => i === (idx - 1) ? (arr[idx].splice(pos,1,n[pos]), n.splice(pos,1,e), n) : n);
}

// This functions moves the given element one row down on the array
function moveDown(arr, e){
    let pos, idx = arr.findIndex(n => [n.includes(e), pos=n.indexOf(e)][0]);
    return arr.map((n, i) => i === (idx + 1) ? (arr[idx].splice(pos,1,n[pos]), n.splice(pos,1,e), n) : n);
}

// let arr = [[0,1,2],[3,4,5],[6,7,8]];

// console.log(moveUp(arr, 8));
// console.log(arr);

// let arr = [[0,1,2],[3,4,5],[6,7,8]];

// console.log(moveDown(arr, 4));
// console.log(arr);

module.exports = { moveUp, moveDown };