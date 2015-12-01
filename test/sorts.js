/* global describe, it */
require('../tools/utils.js');

var PATH_TO_SORTS = 'lib/sorts';

var assert = require('chai').assert,
    lists = require('./data/lists.js');

var sortsNames = require('fs').readdirSync(PATH_TO_SORTS),
    sortsHash = sortsNames.reduce(function(hash, sortName) {
        hash[sortName] = require('../' + PATH_TO_SORTS + '/' + sortName);

        return hash;
    }, {});

var listsNames = Object.keys(lists);

describe('sorts', function() {
    sortsNames.forEach(function(sortName) {
        describe(sortName, function() {
            listsNames.forEach(function(listName) {
                it('should properly sort ' + listName.toLowerCase().replace('_', ' ') + ' list', function() {
                    var originalList = lists[listName],
                        sortedList = sortsHash[sortName]([].concat(originalList));

                    assert.lengthOf(sortedList, originalList.length);
                    assert.sameMembers(sortedList, originalList);
                    assert.isTrue(sortedList.isSortedAsc());
                });
            });
        });
    });
});
