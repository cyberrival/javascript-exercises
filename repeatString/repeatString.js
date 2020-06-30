const repeatString = function (originalString, repeatAmount) {
    let repeatedString = '';
    if (repeatAmount < 0) {
        return 'ERROR';
    }
    else {
        for (let counter = 0; counter < repeatAmount; counter++) {
            repeatedString += originalString;
        }
        return repeatedString;
    }
}

module.exports = repeatString
