const removeFromArray = function (arr, ...query) {
    return arr.filter(function (element) {
        return !query.includes(element);
    })
}



module.exports = removeFromArray
