const Chinese = require('../src/Chinese');

describe('Chinese', () => {
    const person = new Chinese("Vlad", 19);

    it('#contructor. assigns passed name and age to this', () => {
        expect(person.name).to.equal("Vlad");
        expect(person.age).to.equal(19);
    });

    it('#getName', () => {
        expect(person.getName()).to.equal("Vlad");
    })
    it('#getAge', () => {
        expect(person.getAge()).to.equal(19);
    });
    it('#setName', () => {
        person.setName("Sasha");
        expect(person.getName()).to.equal("Sasha");
    });
    it('#setAge', () => {
        person.setAge(20);
        expect(person.getAge()).to.equal(20);
    });
});
