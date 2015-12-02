/**
 * @see https://en.wikipedia.org/wiki/Heapsort
 */

var BinaryHeap = require('../data-structures/binary-heap.js');

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length,
        result,
        heap;

    if (len === 0 || len === 1) {
        return list;
    }

    result = [];
    heap = new BinaryHeap(list);

    for (var i = 0; i < len; i++) {
        result.push(heap.getRoot()); // But what if i have large list and want to sort it inplace?
    }

    return result;
};
