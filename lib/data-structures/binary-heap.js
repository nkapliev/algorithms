/**
 * @see https://en.wikipedia.org/wiki/Binary_heap
 */

/**
 * @typedef {*} Node
 */

require('../../tools/utils.js');

var comparatorsByType = require('../comparators.js');

/**
 * @param {Array} [list=[]]
 * @param {Boolean} [isNeedToBuildInPlace=false]
 *  If isNeedToBuildInPlace is 'true' then heap constructor don't copy the list. The heap build in-place.
 *  If so you shouldn't trying to change list manually, because you broke the heap by doing that.
 * @param {Comparator} [cmp] @see 'comparators.js' Default comparator build min-heap (min node in root).
 * @returns {BinaryHeap}
 * @constructor
 */
var BinaryHeap = function(list, isNeedToBuildInPlace, cmp) {
    if ( ! (this instanceof BinaryHeap)) {
        return new BinaryHeap(list);
    }

    if (Array.isArray(list)) {
        this._list = isNeedToBuildInPlace ? list : list.slice();
    } else {
        this._list = [];
    }

    if (typeof cmp === 'function') {
        this._cmp = cmp;
    } else if (this._list.length && (cmp = comparatorsByType[typeof this._list[0]])) {
        this._cmp = cmp;
    }

    this._heapify();
};

/**
 * Transform this._list into a heap, in-place, in linear time
 * @private
 * @returns {BinaryHeap}
 */
BinaryHeap.prototype._heapify = function() {
    var list = this._list,
        len = list.length;

    for (var i = Math.floor(len / 2); i >= 0; i--) {
        this._siftDown(i);
    }

    return this;
};

/**
 * @private
 * @param {Number} brokenNodeIndex
 */
BinaryHeap.prototype._siftDown = function(brokenNodeIndex) {
    var list = this._list,
        len = list.length,
        cmp = this._cmp,
        rightChildIndex,
        leftChildIndex,
        smallest;

    if (len > 1 && brokenNodeIndex >= 0 && len > brokenNodeIndex) {
        if (len === 2) {
            if (cmp(list[1], list[0]) < 0) {
                list.swap(1, 0);
            }
        } else {
            while (true) {
                smallest = brokenNodeIndex;
                leftChildIndex = 2 * brokenNodeIndex;
                rightChildIndex = 2 * brokenNodeIndex + 1;

                if (
                    leftChildIndex < len &&
                    cmp(list[leftChildIndex], list[smallest]) < 0
                ) {
                    smallest = leftChildIndex;
                }

                if (
                    rightChildIndex < len &&
                    cmp(list[rightChildIndex], list[smallest]) < 0
                ) {
                    smallest = rightChildIndex;
                }

                if (smallest === brokenNodeIndex) {
                    return;
                }

                list.swap(brokenNodeIndex, smallest);
                brokenNodeIndex = smallest;
            }
        }
    }
};

/**
 * @param {Node} newNode
 * @returns {BinaryHeap}
 */
BinaryHeap.prototype.add = function(newNode) {
    var list = this._list,
        len,
        cmp,
        brokenNodeIndex,
        parentNodeIndex;

    list.push(newNode);

    if ( ! this._cmp && (cmp = comparatorsByType[typeof newNode])) {
        this._cmp = cmp;
    } else {
        cmp = this._cmp;
    }

    if ((len = list.length) > 1) {
        if (len === 2) {
            if (cmp(list[1], list[0]) < 0) {
                list.swap(1, 0);
            }
        } else {
            brokenNodeIndex = len - 1;
            parentNodeIndex = Math.floor(brokenNodeIndex / 2);

            while (brokenNodeIndex > 0 && cmp(list[brokenNodeIndex], list[parentNodeIndex]) < 0) {
                list.swap(brokenNodeIndex, parentNodeIndex);

                brokenNodeIndex = Math.floor(brokenNodeIndex / 2);
                parentNodeIndex = Math.floor(brokenNodeIndex / 2);
            }
        }
    }

    return this;
};

/**
 * @returns {Node|undefined}
 */
BinaryHeap.prototype.getRoot = function() {
    var list = this._list,
        root;

    if (list.length === 0) {
        return;
    } else if (list.length === 1) {
        return list.pop();
    }

    root = list[0];

    list[0] = list.pop();
    this._siftDown(0);

    return root;
};

// TODO Think about sort in-place for large list. Some method that return sorted _list.
// Yes, after that the heap broken.
// Need to set some flag _isBroken=true and check it before each public method. If _isBroken -> heapify().

module.exports = BinaryHeap;
