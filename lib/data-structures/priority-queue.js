/**
 * @see https://en.wikipedia.org/wiki/Priority_queue
 */

var BinaryHeap = require('./binary-heap.js');

/**
 * @typedef {Object} PriorityQueueNode
 *  @type {Number} PriorityQueueNode.priority
 */

/**
 *
 * @param {PriorityQueueNode} a
 * @param {PriorityQueueNode} b
 * @returns {Number}
 */
var maxPriorityQueueComparator = function(a, b) {
    return a.priority - b.priority;
};

/**
 *
 * @param {PriorityQueueNode} a
 * @param {PriorityQueueNode} b
 * @returns {Number}
 */
var minPriorityQueueComparator = function(a, b) {
    return b.priority - a.priority;
};

/**
 * @param {Array} [listOfElements]
 * @param {Number[]} [listOfPriorities]
 * @param {Comparator} [cmp] @see 'comparators.js'
 *
 * atata flag isMinPriorQ?
 *
 * opts
 *
 * compare number as-is?
 *
 */
var PriorityQueue = function(opts listOfElements, listOfPriorities, cmp) {
    var list;

    if ( ! (this instanceof PriorityQueue)) {
        return new PriorityQueue(listOfElements, listOfPriorities);
    }

    if (
        listOfElements && listOfPriorities &&
        listOfElements.length === listOfPriorities.length
    ) {
        list = listOfElements.map(function(elememnt, i) {
            return {
                value: elememnt,
                priority: listOfPriorities[i]
            };
        });
    }

    if (typeof cmp === 'function') {
        cmp = function(a, b) {
            return cmp(a.priority, b.priority);
        };
    } else {
        cmp = defaultPriorityQueueComparator;
    }

    this._heap = new BinaryHeap(list, cmp);
};

/**
 * @param {*} element
 * @param {Number} priority
 */
PriorityQueue.prototype.add = function(element, priority) {
    this._heap.add();

    return this;
};

PriorityQueue.prototype.peekHighest = function() {};

PriorityQueue.prototype.removeHighest = function() {};

PriorityQueue.prototype.pullHighest = function() {};


//This may instead be specified as separate "peek_at_highest_priority_element" and "delete_element" functions, which can be combined to produce "pull_highest_priority_element".

modules.exports = PriorityQueue;
