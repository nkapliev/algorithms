/**
 * @see https://en.wikipedia.org/wiki/Gnome_sort
 * @see http://dickgrune.com/Programs/gnomesort.html
 */

require('../../tools/utils.js');

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length,
        i = 0;

    if (len === 0 || len === 1) {
        return list;
    }

    while (i < len) {
        if (i === 0 || list[i] >= list[i - 1]) {
            i++;
        } else {
            list.swap(i, --i);
        }
    }

    return list;
};
