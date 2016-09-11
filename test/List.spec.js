const Chinese = require('../src/Chinese');
const ListItem = require('../src/ListItem');
const List = require('../src/List');

describe('List', () => {

    it('#contructor', () => {
        let s = new List();

        expect(s.head.data).to.equal(-1);
        expect(s.tail.data).to.equal(-1);
        expect(s.count).to.equal(0);
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
            let t = new List();
            let element = new Chinese("Dima", 18)
            t.add(element);
            let relust = t.remove(element);
            expect(t.count).to.equal(0);
        });
        it('if element is first in list', () => {
            let h = new List();
            let element = new Chinese("Katya", 19)
            let element2 = new Chinese("Lin", 19);
            h.add(element);
            h.add(element2);
            h.remove(element);
            expect(h.count).to.equal(1);
            expect(h.head.isEq(h.head.data, element2)).to.equal(true);
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
