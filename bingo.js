class Bingo {
    //
    constructor() {
        this.min = 1;
        this.max = 90;
        this.numbers = [];
    }

    //
    randomNumber() {
        let number = Math.floor(Math.random() * (this.max - this.min) + this.min);
        if(this.numbers.indexOf(number) > -1) {
            this.randomNumber();
        }
        return number;
    }
}
//
module.exports = Bingo;