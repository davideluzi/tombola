const Bingo = require("./bingo")

class Counter extends Bingo {
    constructor() {
        super();
    }

    extractNumber() {
        return this.randomNumber();
    }
}

module.exports = Counter;