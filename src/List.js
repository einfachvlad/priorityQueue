const Chinese = require('./Chinese');
const ListItem = require('./ListItem');

class List {
    constructor() {
        this.head = new ListItem(new Chinese("-1", -1));
        this.tail = new ListItem(new Chinese("-1", -1));
        this.count = 0;
    }

    add(person) {
        var item = new ListItem(person);
        if (this.tail.person.getAge() == -1 && this.tail.person.getName() == "-1") {
            this.head = item;
            this.tail = item;
        } else {
            this.tail.setNext(item);
            this.tail = item;
        }
        this.count++;
    }

    remove(person) {
        if (this.head.person.getAge() == -1 && this.head.person.getName() == "-1")
            return;

        if (this.head == this.tail) {
            this.head = new ListItem(new Chinese("-1", -1));
            this.tail = new ListItem(new Chinese("-1", -1));
            this.count--;
            return;
        }
        if (this.head.person.getName() == person.getName() && this.head.person.getAge() == person.getAge()) {
            this.head = this.head.getNext();
            this.count--;
            return;
        }
        var index = this.head;
        while (index.next !== null) {
            if (index.next.person.getName() == person.getName() && index.next.person.getAge() == person.getAge()) {
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
