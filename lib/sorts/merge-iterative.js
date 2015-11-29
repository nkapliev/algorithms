/**
 * @see https://en.wikipedia.org/wiki/Merge_sort
 */

/**
 * @param {Number[]} listA
 * @param {Number[]} listB
 * @returns {Number[]}
 */
function merge(listA, listB) {
    var result = [],
        lenA = listA.length,
        lenB = listB.length,
        iA = 0,
        iB = 0;

    while (iA < lenA || iB < lenB) {
        if (iA === lenA) {
            if (iB === lenB - 1) {
                result.push(listB[iB]);
            } else {
                result = result.concat(listB.slice(iB));
            }

            break;
        } else if (iB === lenB) {
            if (iA === lenA - 1) {
                result.push(listA[iA]);
            } else {
                result = result.concat(listA.slice(iA));
            }

            break;
        } else if (listA[iA] < listB[iB]) {
            result.push(listA[iA++]);
        } else {
            result.push(listB[iB++]);
        }
    }

    return result;
}

/**
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length,
        queue;

    if (len === 0 || len === 1) {
        return list;
    }

    queue = list.map(function(item) {
        return [ item ];
    });

    while (queue.length > 1) {
        queue.push(
            merge(queue.pop(), queue.pop()));
    }

    return queue.pop();
};
