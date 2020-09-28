
exports.min = function min(array) {
    if (typeof (array) == 'undefined') return 0
    else if (array.length == 0 || Array.isArray(array == false)) return 0
    else return array.sort((a, b) => a - b)[0]
}

exports.max = function max(array) {
    if (typeof (array) == 'undefined') return 0
    else if (array.length == 0 || Array.isArray(array == false)) return 0
    else return array.sort((a, b) => b - a)[0]
}

exports.avg = function avg(array) {
    if (typeof (array) == 'undefined') return 0
    else if (array.length == 0 || Array.isArray(array == false)) return 0
    else return array.reduce((sum, current) => (sum + current)) / array.length
}
