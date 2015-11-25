/* global describe, it */
var PATH_TO_SORTS = 'lib/sorts';

var assert = require('chai').assert,
    utils = require('./lib/utils.js'),
    lists = require('./data/lists.js');

var sortsNames = require('fs').readdirSync(PATH_TO_SORTS),
    sortsHash = sortsNames.reduce(function(hash, sortName) {
        hash[sortName] = require('../' + PATH_TO_SORTS + '/' + sortName);

        return hash;
    }, {});

var listsNames = Object.keys(lists),
    tests = listsNames.map(function(listName) {
        var shouldTestMessage = 'should properly sort ' + listName.toLowerCase().replace('_', ' ') + ' list';

        return function(sort) {
            it(shouldTestMessage, function() {
                var originalList = lists[listName],
                    sortedList = sort([].concat(originalList));

                assert.lengthOf(sortedList, originalList.length);
                assert.sameMembers(sortedList, originalList);
                assert.isTrue(utils.isSortedAsc(sortedList));
            });
        };
    });

describe('sorts', function() {
    sortsNames.forEach(function(sortName) {
        describe(sortName, function() {
            var sortFn = sortsHash[sortName];

            tests.forEach(function(test) {
                test(sortFn);
            });
        });
    });
});
