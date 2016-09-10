const Chinese = require('./Chinese');

class ListItem {
    constructor(person) {
        this.person = person;
        this.next = null;
    }
    setNext(nextItem) {
        if (nextItem.person.getAge() == this.person.getAge())
            this.next = nextItem;
        else throw new Error("next person has not the same age");

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
