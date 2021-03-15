const Bingo = require("./bingo")

class Card extends Bingo {
    //
    constructor() {
        super();
        this.rows = {
            first: [],
            second: [],
            third: [],
        };
        this.populateCard();
    }
    //
    populateCard() {
        for (let row in this.rows) {
            for (let i = 0; i < 5; i++) {
                let number = this.randomNumber();
                this.numbers.push(number)
                this.rows[row].push(number)
            }
        }
    }

}
//
module.exports = Card;