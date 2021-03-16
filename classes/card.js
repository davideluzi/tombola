const Bingo = require("./bingo")

class Card extends Bingo {
    //
    constructor() {
        super();
        this.rows = [
            [],
            [],
            [],
        ];
        this.populateCard();
        this.combinationsLeft = ['ambo', 'terno', 'quaterna', 'cinquina']
        this.numbersChecked = []
    }

    //
    populateCard() {
        for (let row in this.rows) {
            for (let i = 0; i < 5; i++) {
                let number = this.randomNumber();
                this.rows[row].push(number)
            }
            this.rows[row].sort(function(a, b) {
                return a - b;
            });
        }
    }

    checkCombination(extractedNumbers) {
        let lastNumber = extractedNumbers[extractedNumbers.length - 1];
        // check bingo
        if (this.numbers.indexOf(lastNumber) > -1) {
            this.numbersChecked.push(lastNumber)
        }
        if (this.numbersChecked.length === this.numbers.length) return 'tombola';

        for (let number in extractedNumbers) {
            for (let row in this.rows) {
                //
                let self = this
                const found = extractedNumbers.filter(function (elem) {
                    return self.rows[row].indexOf(elem) > -1;
                }).length;
                let combination = this.checkKindOfRowCombination(found)
                if (combination !== "undefined" && this.combinationsLeft.indexOf(combination) > -1) {
                    this.combinationsLeft.splice(this.combinationsLeft.indexOf(combination), 1);
                    return combination;
                }
            }
        }
    }

    checkKindOfRowCombination(found) {
        return {
            5: 'cinquina',
            4: 'quaterna',
            3: 'terno',
            2: 'ambo'
        }[found]
    }

    checkIsBingo() {

    }
}

//
module.exports = Card;