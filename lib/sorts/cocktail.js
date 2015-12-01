/**
 * @see https://en.wikipedia.org/wiki/Cocktail_sort
 */

require('../../tools/utils.js');

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length,
        right,
        left,
        i;

    if (len === 0 || len === 1) {
        return list;
    }

    right = len - 1;
    left = 0;

    do {
        for (i = left; i < right; i++) {
            if (list[i] > list[i + 1]) {
                list.swap(i, i + 1);
            }
        }

        right--;

        for (i = right; i > left ; i--) {
            if (list[i] < list[i - 1]) {
                list.swap(i, i - 1);
            }
        }

        left++;
    } while (left <= right);

    return list;
};
