/**
 * @typedef {Function} Comparator
 * It is a function with 2 arguments.
 * Return:
 *     0 if arguments are equal,
 *     positive number if first > second
 *     negative number if first < second
 */

/**
 * Hash of Comparators by type.
 * Has default asc comparator for Numbers|Strings|Object nodes.
 * For other types set your own comparator function.
 * @type {Object}
 */
module.exports = {

    /**
     * @param {Number} a
     * @param {Number} b
     * @returns {Number}
     */
    number: function(a, b) {
        return a - b;
    },

    /**
     * @param {String} a
     * @param {String} b
     * @returns {Number}
     */
    string: function(a, b) {
        if (a === b) {
            return 0;
        } else if (a > b) {
            return 1;
        } else {
            return -1;
        }
    },

    /**
     * @param {Object} a
     * @param {Object} b
     * @returns {Number}
     */
    object: function(a, b) {
        var aValue = a && a.valueOf(),
            bValue = b && b.valueOf();

        if (aValue === bValue) {
            return 0;
        } else if (aValue > bValue) {
            return 1;
        } else {
            return -1;
        }
    }

};
