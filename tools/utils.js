if ( ! Array.prototype.hasOwnProperty('swap')) {
    Object.defineProperty(Array.prototype, 'swap', { value:
        function(i, j) {
            var swapElem;

            if (i < this.length && j < this.length) {
                swapElem = this[i];
                this[i] = this[j];
                this[j] = swapElem;
            }

            return this;
        }
    });
}

if ( ! Array.prototype.hasOwnProperty('isSortedAsc')) {
    Object.defineProperty(Array.prototype, 'isSortedAsc', { value:
        function() {
            var len = this.length;

            if (len > 2) {
                for (var i = 1; i < len; i++) {
                    if (this[i] < this[i - 1]) {
                        return false;
                    }
                }
            } else if (len === 2) {
                return this[1] >= this[0];
            }

            return true;
        }
    });
}
