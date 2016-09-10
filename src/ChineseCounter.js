const Chinese = require('./Chinese');
const ListItem = require('./ListItem');
const List = require('./List');

class ChineseCounter {
    constructor() {
        this.agesArray = [];
        for (let index = 0; index < 140; index++)
            this.agesArray[index] = new List();
    }
    getArray() {
        return this.agesArray;
    }
}
module.exports = ChineseCounter;
