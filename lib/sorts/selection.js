/**
 * @see https://en.wikipedia.org/wiki/Selection_sort
 */

require('../../tools/utils.js');

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length;

    if (len === 0 || len === 1) {
        return list;
    }

    for (var i = 0, indexOfMinElement; i < len - 1; i++) {
        indexOfMinElement = i;

        for (var j = i + 1; j < len; j++) {
            if (list[j] < list[indexOfMinElement]) {
                indexOfMinElement = j;
            }
        }

        if (indexOfMinElement !== i) {
            list.swap(i, indexOfMinElement);
        }
    }

    return list;
};
