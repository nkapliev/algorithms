/**
 * @see https://en.wikipedia.org/wiki/Selection_sort
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

    for (var i = 0, swapItem, minIndex; i < len - 1; i++) {
        minIndex = i;

        for (var j = i + 1; j < len; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swapItem = list[i];
            list[i] = list[minIndex];
            list[minIndex] = swapItem;
        }
    }

    return list;
};
