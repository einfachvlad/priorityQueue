const Chinese = require('../src/Chinese');
const ListItem = require('../src/ListItem');

describe('ListItem', () => {

    it('#contructor. assigns passed person and link to next item to this', () => {
        let person = new Chinese("Maxim", 15);
        let item = new ListItem(person);
        expect(item.person.getName()).to.equal("Maxim");
        expect(item.person.getAge()).to.equal(15);
        expect(item.next).to.equal(null);
    });

    describe('#setNext', () => {
        let item = new ListItem(new Chinese("Maxim", 15));
        let nextItem = new ListItem(new Chinese("Igor", 15));
        item.next = nextItem;

        it('nextItem has correct name of person', () => {
            expect(item.next.person.getName()).to.equal("Igor");
        });
        it('nextItem has correct age of person', () => {
            expect(item.next.person.getAge()).to.equal(15);
        });
        it('nextItem has not nextItem ', () => {
            expect(item.next.next).to.equal(null);
        });
        it('throws an error if next person has not the same age', () => {
            let secondPerson = new Chinese("Igor", 8);
            let nextItem = new ListItem(secondPerson);
            expect(() => {
                item.setNext(nextItem);
            }).to.throw();
        });
    });
    describe('#getNext', () => {
        let item = new ListItem(new Chinese("Maxim", 15));
        let nextItem = new ListItem(new Chinese("Igor", 15));
        item.setNext(nextItem);

        it('nextItem has correct name of person', () => {
            expect(item.next.person.getName()).to.equal("Igor");
        });
        it('nextItem has correct age of person', () => {
            expect(item.next.person.getAge()).to.equal(15);
        });
        it('nextItem has not nextItem ', () => {
            expect(item.next.next).to.equal(null);
        });
    });

    describe('#hasNext', () => {
        it('current item has not nextItem', () => {
            let item = new ListItem(new Chinese("Maxim", 15));
            expect(item.hasNext()).to.equal(false);
        });

        it('current item has nextItem', () => {
            let item = new ListItem(new Chinese("Maxim", 15));
            let nextItem = new ListItem(new Chinese("Igor", 15));
            item.setNext(nextItem);
            expect(item.hasNext()).to.equal(true);
        });

    });
});
