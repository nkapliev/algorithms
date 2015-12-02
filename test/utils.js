/* global describe, it */
require('../tools/utils.js');
var assert = require('chai').assert,
    lists = require('./data/lists.js');

describe('utils', function() {
    it('should properly swap elements in list', function() {
        var list = lists['with length 2'].slice(),
            elem0 = list[0],
            elem1 = list[1];

        assert.isFunction(Array.prototype.swap);

        list.swap(0, 1);
        assert.equal(elem0, list[1]);
        assert.equal(elem1, list[0]);

        list.swap(0, 0);
        assert.equal(elem0, list[1]);
        assert.equal(elem1, list[0]);

        list.swap(-1, 0);
        assert.equal(elem0, list[1]);
        assert.equal(elem1, list[0]);

        list.swap(0, -1);
        assert.equal(elem0, list[1]);
        assert.equal(elem1, list[0]);

        list.swap(-1, -1);
        assert.equal(elem0, list[1]);
        assert.equal(elem1, list[0]);
    });

    it('should properly check asc order in list', function() {
        var emptyList = lists['with no elements'].slice(),
            oneElementList = lists['with length 1'].slice(),
            sortedAscList = lists['sorted asc'].slice(),
            sortedDesList = lists['sorted des'].slice();

        assert.isFunction(Array.prototype.isSortedAsc);

        assert.isTrue(emptyList.isSortedAsc());
        assert.isTrue(oneElementList.isSortedAsc());
        assert.isTrue(sortedAscList.isSortedAsc());

        assert.isFalse(sortedDesList.isSortedAsc());
    });
});
