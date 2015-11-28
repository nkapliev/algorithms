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
            result = result.concat(listB.slice(iB));

            break;
        } else if (iB === lenB) {
            result = result.concat(listA.slice(iA));

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
 * @param {Number} left
 * @param {Number} right
 * @returns {Number[]}
 */
function mergeSort(list, left, right) {
    var middle;

    if (left < right) {
        middle = left + Math.floor((right - left) / 2);

        return merge(
            mergeSort(list, left, middle),
            mergeSort(list, middle + 1, right)
        );
    } else {
        return [ list[left] ];
    }
}

/**
 * @see https://en.wikipedia.org/wiki/Merge_sort
 * @param {Number[]} list
 * @returns {Number[]}
 */
module.exports = function(list) {
    var len = list.length;

    if (len === 0 || len === 1) {
        return list;
    }

    return mergeSort(list, 0, len - 1);
};
