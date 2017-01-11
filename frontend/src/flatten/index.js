const isArray = (a) => a instanceof Array;

const reduce = (iterable, iteratee, memo) => {
    for (let i of iterable) {
        memo = iteratee(memo, i);
    }
    return memo;
}

const concat = (a, b) => {
    // This is the mess you get when you cant guarentee if the item entering will be an array or object
    if (isArray(a) && isArray(b)) return [...a, ...b];
    if (!isArray(a) && !isArray(b)) return [a, b];
    if (isArray(a) && !isArray(b)) return [...a, b];
    if (!isArray(a) && isArray(b)) return [a, ...b];
}

const flatten = (arr) => {
    const recurseIfArray = (c) => isArray(c) ? flatten(c) : c;
    const recursiveReduction = (a, c) => concat(a, recurseIfArray(c));
    return isArray(arr) ? reduce(arr, recursiveReduction, []) : arr;
}

module.exports = {
    flatten,
    concat,
    reduce,
    isArray
};
