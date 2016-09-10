const Chinese = require('../src/Chinese');
const ListItem = require('../src/ListItem');
const List = require('../src/List');

describe('List', () => {

    it('#contructor', () => {
        let list = new List();

        expect(list.head.person.getName()).to.equal("-1");
        expect(list.tail.person.getName()).to.equal("-1");
        expect(list.head.person.getAge()).to.equal(-1);
        expect(list.tail.person.getAge()).to.equal(-1);
        expect(list.count).to.equal(0);
    });

    describe('#add', () => {
        let list = new List();

        let firstPerson = new Chinese("Igor", 15);
        list.add(firstPerson);

        it('if list is empty, will add first element ', () => {
            expect(list.tail).to.equal(list.head);
        });

        let secondList = new List();
        secondList.add(firstPerson);
        secondList.add(new Chinese("Sasha", 15));
        it('add next element if list is not empty ', () => {
            expect(secondList.tail).to.equal(secondList.head.getNext());
        });

    });

    describe('#remove', () => {
        it('does nothing if list is empty', () => {
            let h = new List();
            h.remove(new Chinese("nothing", 0));
            expect(h.count).to.equal(0);
        });
        it('remove last element if list has one element', () => {
            let h = new List();
            let element = new Chinese("Dima", 18)
            h.add(element);
            let relust = h.remove(element);
            expect(h.count).to.equal(0);
        });
        it('if element is first in list', () => {
            let h = new List();
            let element = new Chinese("Katya", 19)
            h.add(element);
            h.add(new Chinese("Lin", 19));
            h.remove(element);
            expect(h.count).to.equal(1);
            expect(h.head.person.getName()).to.equal("Lin");
        });
        it('remove element in random position of list', () => {
            let h = new List();
            h.add(new Chinese("Katya", 19));
            h.add(new Chinese("Lin", 19));
            h.add(new Chinese("Sam", 19));
            let element = new Chinese("Koi", 19);
            h.add(element);
            h.add(new Chinese("Kaui", 19));
            h.remove(element);
            expect(h.count).to.equal(4);
        });
    });
});
