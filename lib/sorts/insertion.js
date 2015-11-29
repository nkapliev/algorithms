/**
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 */

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length;

    if (len === 0 || len === 1) {
        return list;
    }

    for (var i = 1, currentItem; i < len; i++) {
        currentItem = list[i];

        for (var j = i - 1; j >= 0 && list[j] > currentItem; j--) {
            list[j + 1] = list[j];
        }

        list[j + 1] = currentItem;
    }

    return list;
};
