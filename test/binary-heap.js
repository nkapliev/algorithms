/* global describe, it */
require('../tools/utils.js');

var assert = require('chai').assert,
    lists = require('./data/lists.js'),
    BinaryHeap = require('../lib/data-structures/binary-heap.js');

var customComparator = function(a, b) {
    return b - a;
};

describe('BinaryHeap', function() {
    it('has constructor function', function() {
        assert.isFunction(BinaryHeap);
    });

    it('should properly create empty heap with "new"', function() {
        var heap = new BinaryHeap();

        assert.instanceOf(heap, BinaryHeap);
        assert.isArray(heap._list);
        assert.lengthOf(heap._list, 0);
        assert.isUndefined(heap._cmp);
    });

    it('should properly create empty heap without "new"', function() {
        var heap = BinaryHeap();

        assert.instanceOf(heap, BinaryHeap);
        assert.isArray(heap._list);
        assert.lengthOf(heap._list, 0);
        assert.isUndefined(heap._cmp);
    });

    it('should properly create heap from empty list', function() {
        var list = lists['with no elements'].slice(),
            heap = new BinaryHeap(list);

        assert.isArray(heap._list);
        assert.lengthOf(heap._list, 0);
        assert.isUndefined(heap._cmp);
    });

    it('should properly create heap from filled list', function() {
        var list = lists['with length 5'].slice(),
            len = list.length,
            minElement = Math.min.apply(null, list),
            heap = new BinaryHeap(list);

        assert.isArray(heap._list);
        assert.lengthOf(heap._list, len);
        assert.isFunction(heap._cmp);
        assert.equal(heap._list[0], minElement);
    });

    it('should properly create heap with custom comparator', function() {
        var list = lists['with length 5'].slice(),
            heap = new BinaryHeap(list, false, customComparator);

        assert.isFunction(heap._cmp);
        assert.equal(heap._cmp, customComparator);
    });

    it('should properly add nodes in heap', function() {
        var list = lists['with length 5'].slice(),
            len = list.length,
            minElement = Math.min.apply(null, list),
            newNode = minElement - 1,
            heap = new BinaryHeap(list);

        assert.isFunction(heap.add);

        heap.add(newNode);

        assert.lengthOf(heap._list, len + 1);
        assert.lengthOf(list, len);
        assert.equal(heap._list[0], newNode);
    });

    it('should properly add nodes in heap with isNeedToBuildInPlace=true', function() {
        var list = lists['with length 5'].slice(),
            len = list.length,
            minElement = Math.min.apply(null, list),
            newNode = minElement - 1,
            heap = new BinaryHeap(list, true);

        assert.isFunction(heap.add);

        heap.add(newNode);

        assert.lengthOf(heap._list, len + 1);
        assert.lengthOf(list, len + 1);
        assert.equal(heap._list[0], newNode);
    });

    it('should properly get root from heap', function() {
        var list = lists['with length 5'].slice(),
            len = list.length,
            heap = new BinaryHeap(list),
            minElement = Math.min.apply(null, list),
            root;

        assert.isFunction(heap.getRoot);

        root = heap.getRoot();

        assert.lengthOf(heap._list, len - 1);
        assert.lengthOf(list, len);
        assert.equal(root, minElement);
    });

    it('should properly get root from heap with isNeedToBuildInPlace=true', function() {
        var list = lists['with length 5'].slice(),
            len = list.length,
            heap = new BinaryHeap(list, true),
            minElement = Math.min.apply(null, list),
            root;

        assert.isFunction(heap.getRoot);

        root = heap.getRoot();

        assert.lengthOf(heap._list, len - 1);
        assert.lengthOf(list, len - 1);
        assert.equal(root, minElement);
    });

    it('should properly heapify', function() {
        var list = lists['with length 5'].slice(),
            heap = new BinaryHeap(list);

        assert.isFunction(heap._heapify);
        //TODO
    });

    it('should properly _siftDown', function() {
        var list = lists['with length 5'].slice(),
            heap = new BinaryHeap(list);

        assert.isFunction(heap._siftDown);
        //TODO
    });
});
