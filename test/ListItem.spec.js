const Chinese = require('../src/Chinese');
const ListItem = require('../src/ListItem');

describe('ListItem', () => {

    it('#contructor. assigns passed data and link to next item to this', () => {
        let person = new Chinese("Maxim", 15);
        let item = new ListItem(person);
        expect(item.isEq(item.data, person)).to.equal(true);
        expect(item.next).to.equal(null);
    });

    it('#isEq', () => {
        let person = new Chinese("Maxim", 15);
        let item = new ListItem(person);
        let nextItem = new ListItem(person);
        expect(item.isEq(item.data, nextItem.data)).to.equal(true);
        expect(item.isEq(5, 6)).to.equal(false);
        expect(item.isEq(5, "some")).to.equal(false);
        expect(item.isEq("some", "some")).to.equal(true);
    });

    describe('#setNext', () => {
        let item = new ListItem(new Chinese("Maxim", 15));
        let nextItem = new ListItem(new Chinese("Igor", 15));
        item.next = nextItem;

        it('nextItem has correct data', () => {
            expect(item.isEq(item.next.data, nextItem.data)).to.equal(true);
        });
        it('nextItem has not nextItem ', () => {
            expect(item.next.next).to.equal(null);
        });

    });
    describe('#getNext', () => {
        let item = new ListItem(new Chinese("Maxim", 15));
        let nextItem = new ListItem(new Chinese("Igor", 15));
        item.setNext(nextItem);

        it('nextItem has correct data', () => {
            expect(item.isEq(item.next.data, nextItem.data)).to.equal(true);
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
