function invertLetter(str){
    let abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.replace(/[a-z]/gi, char => abc.at(-(abc.indexOf(char) + 1)));
}

// console.log(invertLetter('A'));
// console.log(invertLetter('z'));
// console.log(invertLetter('p'));
// console.log(invertLetter('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'));
// console.log(invertLetter('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
module.exports = { invertLetter }