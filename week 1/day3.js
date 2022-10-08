// This function replaces each character from the key with whitespace

let replaceSpace = function (str, rpl)  {
    let regEx = new RegExp(`[${rpl}]`, 'g');
    return str.replace(regEx, ' ');
}

// console.log(replaceSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'));

module.exports = { replaceSpace };