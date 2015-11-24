/* global describe, it, before */
var assert = require('chai').assert,
    path = 'lib/sorts/',
    sortsNames = require('fs').readdirSync(path),
    sorts = sortsNames.reduce(function(hash, sortName) {
        hash[sortName] = require('../' + path + sortName);

        return hash;
    }, {});

var EMPTY_ARRAY_ = [],
    ONE_ELEMENT_ARRAY_ = [ 1 ],
    SORTED_ARRAY_ = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    REVERSE_SORTED_ARRAY_ = [].concat(SORTED_ARRAY_).reverse();

var isSortedAsc = function(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }

    return true;
};

describe('sorts', function() {
    sortsNames.forEach(function(sortName) {
        describe(sortName, function() {
            var EMPTY_ARRAY,
                ONE_ELEMENT_ARRAY,
                SORTED_ARRAY,
                REVERSE_SORTED_ARRAY;

            before(function() {
                EMPTY_ARRAY = [];
                ONE_ELEMENT_ARRAY = [].concat(ONE_ELEMENT_ARRAY_);
                SORTED_ARRAY = [].concat(SORTED_ARRAY_);
                REVERSE_SORTED_ARRAY = [].concat(REVERSE_SORTED_ARRAY_);
            });

            var sort = sorts[sortName];

            it('should properly sort empty array', function() {
                sort(EMPTY_ARRAY);

                assert.lengthOf(EMPTY_ARRAY, EMPTY_ARRAY_.length);
            });

            it('should properly sort one-element array', function() {
                sort(ONE_ELEMENT_ARRAY);

                assert.lengthOf(ONE_ELEMENT_ARRAY, ONE_ELEMENT_ARRAY_.length);
                assert.sameMembers(ONE_ELEMENT_ARRAY, ONE_ELEMENT_ARRAY_);
            });

            it('should properly sort already sorted array', function() {
                sort(SORTED_ARRAY);

                assert.lengthOf(SORTED_ARRAY, SORTED_ARRAY_.length);
                assert.sameMembers(SORTED_ARRAY, SORTED_ARRAY_);
                assert.isTrue(isSortedAsc(SORTED_ARRAY));
            });

            it('should properly sort reverse sorted array', function() {
                sort(REVERSE_SORTED_ARRAY);

                assert.lengthOf(REVERSE_SORTED_ARRAY, REVERSE_SORTED_ARRAY_.length);
                assert.sameMembers(REVERSE_SORTED_ARRAY, REVERSE_SORTED_ARRAY_);
                assert.isTrue(isSortedAsc(REVERSE_SORTED_ARRAY));
            });
        });
    });
});
