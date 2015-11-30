/**
 * @see https://en.wikipedia.org/wiki/Counting_sort
 */

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length,
        resultHash,
        resultList;

    if (len === 0 || len === 1) {
        return list;
    }

    resultHash = {};
    resultList = [];

    for (var i = 0; i < list.length; i++) {
        if (resultHash[list[i]]) {
            resultHash[list[i]]++;
        } else {
            resultHash[list[i]] = 1;
        }
    }

    Object
        .keys(resultHash)
        .map(function(key) {
            return parseInt(key, 10);
        })
        .sort(function(a, b) {
            return a - b;
        })
        .forEach(function(key) {
            var counter = resultHash[key];

            for (var i = 0; i < counter; i++) {
                resultList.push(key);
            }
        });

    return resultList;
};
