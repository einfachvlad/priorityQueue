const Chinese = require('./Chinese');
const ListItem = require('./ListItem');

class List {
    constructor() {
        this.head = new ListItem(-1);
        this.tail = new ListItem(-1);
        this.count = 0;
    }

    add(data) {
        var item = new ListItem(data);
        if (this.tail.data == -1) {
            this.head = item;
            this.tail = item;
        } else {
            this.tail.setNext(item);
            this.tail = item;
        }
        this.count++;
    }

    remove(data) {
        if (this.head.data == -1)
            return;

        if (this.head == this.tail) {
            this.head = new ListItem(-1);
            this.tail = new ListItem(-1);
            this.count--;
            return;
        }
        if (this.head.isEq(this.head.data, data)) {
            this.head = this.head.getNext();
            this.count--;
            return;
        }
        var index = this.head;
        while (index.next !== null) {
            if (index.next.isEq(index.next.data, data)) {
                if (this.tail == index.next)
                    this.tail = index;
                index.setNext(index.next.next);
                this.count--;
                return;
            }
            index = index.next;
        }
    }
}
module.exports = List;
