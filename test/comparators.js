/* global describe, it */
var assert = require('chai').assert,
    comparators = require('../lib/comparators.js');

describe('comparators', function() {
    it('should properly compare numbers', function() {
        var a = 10,
            b = 33,
            cmp = comparators[typeof a];

        assert.isFunction(cmp);
        assert.isNumber(cmp(a, b));
        assert.isBelow(cmp(a, b), 0);
        assert.isAbove(cmp(b, a), 0);
        assert.equal(cmp(a, a), 0);
    });

    it('should properly compare strings', function() {
        var a = 'aaaa',
            b = 'aaab',
            cmp = comparators[typeof a];

        assert.isFunction(cmp);
        assert.isNumber(cmp(a, b));
        assert.isBelow(cmp(a, b), 0);
        assert.isAbove(cmp(b, a), 0);
        assert.equal(cmp(a, a), 0);
    });

    it('should properly compare objects', function() {
        var ComparableObject = function(value) {
                this.valueOf = function() {
                    return value;
                };
            },
            a = new ComparableObject(10),
            b = new ComparableObject(33),
            cmp = comparators[typeof a];

        assert.isFunction(cmp);
        assert.isNumber(cmp(a, b));
        assert.isBelow(cmp(a, b), 0);
        assert.isAbove(cmp(b, a), 0);
        assert.equal(cmp(a, a), 0);
    });
});
