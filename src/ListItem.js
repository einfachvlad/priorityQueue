const Chinese = require('./Chinese');

class ListItem {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    isEq(a, b) {
        if (a == b) return true;
        else if (typeof(a) != "object" || typeof(b) != "object")
            return false;
        for (var i in a) {
            if (!this.isEq(a[i], b[i])) return false;
        }
        return true;
    }
    setNext(nextItem) {
        this.next = nextItem;
    }
    getNext() {
        return this.next;
    }
    hasNext() {
        if (this.next !== null)
            return true;
        else return false;
    }
}
module.exports = ListItem;
