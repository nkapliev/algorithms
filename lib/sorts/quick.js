/**
 * @see https://en.wikipedia.org/wiki/Quicksort
 */

require('../../tools/utils.js');

/**
 * @param {Number[]} list
 * @param {Number} left
 * @param {Number} right
 * @returns {Number} Index of pivot elem
 */
var partition = function(list, left, right) {
    var pivot = list[Math.floor(left + (right - left) / 2)],
        i = left,
        j = right;

    while (true) {
        while (list[i] < pivot) { i++; }
        while (list[j] > pivot) { j--; }

        if (i < j) {
            if (list[i] === list[j]) {
                i++;
                j--;
            } else {
                list.swap(i, j);
            }
        } else {
            return j;
        }
    }
};

/**
 * @param {Number[]} list
 * @param {Number} left
 * @param {Number} right
 */
var qsort = function(list, left, right) {
    var pivotIndex;

    if (left < right) {
        pivotIndex = partition(list, left, right);
        qsort(list, left, pivotIndex);
        qsort(list, pivotIndex + 1, right);
    }
};

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length;

    if (len === 0 || len === 1) {
        return list;
    }

    qsort(list, 0, len - 1);

    return list;
};
