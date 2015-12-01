/**
 * @see https://en.wikipedia.org/wiki/Bubble_sort
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

    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                list.swap(j, j + 1);
            }
        }
    }

    return list;
};
