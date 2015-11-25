module.exports = {

    /**
     * @param {Number[]} list
     * @returns {Boolean}
     */
    isSortedAsc: function(list) {
        var len;

        if ( ! Array.isArray(list)) {
            return false;
        }

        len = list.length;

        if (len === 0 || len === 1) {
            return true;
        }

        for (var i = 1; i < len; i++) {
            if (list[i] < list[i - 1]) {
                return false;
            }
        }

        return true;
    }

};
