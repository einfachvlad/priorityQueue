const Chinese = require('../src/Chinese');
const ListItem = require('../src/ListItem');
const List = require('../src/List');
const ChineseCounter = require('../src/ChineseCounter');

describe('ChineseCounter', () => {
    const chineseCounter = new ChineseCounter();

    it('#contructor', () => {
        expect(chineseCounter.agesArray.length).to.equal(140);
    });

    it('#getArray', () => {
        expect(chineseCounter.getArray()).to.equal(chineseCounter.agesArray);
    });

    it('adding a person', () => {
        let person = new Chinese("Lao", 50);
        chineseCounter.agesArray[person.getAge()].add(person);
        expect(chineseCounter.agesArray[50].head.person.getName()).to.equal("Lao");
        expect(chineseCounter.agesArray[50].head.person.getAge()).to.equal(50);
    });
});
