class Bingo {
    //
    constructor() {
        this.min = 1;
        this.max = 90;
        this.numbers = [];
    }

    //
    randomNumber() {
        let number = Math.floor(Math.random() * ((this.max+1) - this.min) + this.min);
        if(this.numbers.indexOf(number) > -1) {
            this.randomNumber();
        } else {
            this.numbers.push(number)
        }

        return number;
    }
}
//
module.exports = Bingo;