function shuffle(arr){
    return arr.sort((a,b) => 2 * Math.random() - 1)
}

function fisherYates(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

console.log(shuffle([1,2,3,4,5,6,7]));
console.log(shuffle([...'abcdefgh']));
console.log(fisherYates([1,2,3,4,5,6,7]));
console.log(fisherYates([...'abcdefgh']));

// fisherYates has better performance

module.exports = { shuffle };