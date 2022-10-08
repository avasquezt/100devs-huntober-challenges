// This funtion removes each nth character from the given string using Regular Expressions

// function removeNthChar(str, n){
//     let regEx = new RegExp(`(.{${n - 1}}).`, 'g');
//     return str.replace(regEx, '$1');
// }

// Removing each nth character from the given string using Array methods

function removeNthChar(str, n){
    return str.split('')
            .reduce((ans, char, i) => (i + 1) % n ? ans += char : ans, '');
}

// console.log(removeNthChar("Thies its H alltowe!en!? Th#is Tis GHalolomeen$!", 4));
// console.log(removeNthChar("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5));

module.exports = { removeNthChar };