// This function replaces each character from the key with whitespace

let replaceSpace = function (str, key)  {
    // /[key]/g    Matches every character from key in the given string 
    let regEx = new RegExp(`[${key}]`, 'g');
    return str.replace(regEx, ' ');
}

// console.log(replaceSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'));

module.exports = { replaceSpace };