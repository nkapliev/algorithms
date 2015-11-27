/* global describe, it */
var PATH_TO_SORTS = 'lib/sorts';

var assert = require('chai').assert,
    utils = require('./lib/utils.js'),
    listsHash = require('./data/lists.js'),
    listsNames = Object.keys(lists),
    sortsNames = require('fs').readdirSync(PATH_TO_SORTS),
    sortsHash = sortsNames.reduce(function(hash, sortName) {
        hash[sortName] = require('../' + PATH_TO_SORTS + '/' + sortName);

        return hash;
    }, {});

var tests = {
        simple: {
            sorts: [ 'bubble', 'insertion', 'selection' ],
            lists: [  ],
            run: function(sortName) {


                var originalList = listsHash[listName],
                    sortedList = sortsHash[sortName].sort([].concat(originalList));

                assert.lengthOf(sortedList, originalList.length);
                assert.sameMembers(sortedList, originalList);
                assert.isTrue(utils.isSortedAsc(sortedList));
            }
        },
        stable: function() {

        }
    };

var simpleTest = ,
    stableTest = ,
    testsMessages = listsNames.map(function(listName) {
        var shouldTestMessage = 'should properly sort ' + listName.toLowerCase().replace('_', ' ') + ' list';

        return function(sort) {
            it(shouldTestMessage, function() {
                simpleTest();
            });
        };
    });

describe('sorts', function() {
    sortsNames.forEach(function(sortName) {
        describe(sortName, function() {
            Object.keys(tests).forEach(function(testName) {
                tests[testName]
            });



        });
    });
});
