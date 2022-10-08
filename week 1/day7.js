// This funtion calculates the inverse of the string (inverse case and position in the alphabet)

function invertLetter(str){
    let abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // /[a-z]/gi    Matches every character from the string that is a letter, ignoring the case
    return str.replace(/[a-z]/gi, char => abc.at(-(abc.indexOf(char) + 1)));
}

// console.log(invertLetter('A'));
// console.log(invertLetter('z'));
// console.log(invertLetter('p'));
// console.log(invertLetter('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'));
// console.log(invertLetter('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
module.exports = { invertLetter }