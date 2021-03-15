let Card = require("./card.js");
let Counter = require("./counter.js");
let playerAudio = require('play-sound')(opts = {})
//
class Game {
    constructor() {
        // Init user card
        this.userCard = new Card();
        // Init computer card
        this.computerCard = new Card();
        // Init counter
        this.mainCounter = new Counter();
        //
        this.timeStep = 700;
        //
        this.number = 0;
        this.combinationsLeft = ['ambo','terno','quaterna','cinquina','tombola']
        this.printHeader();
    }

    printHeader() {
        console.log('BENVENUTI NEL GIOCO DELLA TOMBOLA!\n')
        console.log('----------------------------------\n')
        console.log('Questa è la tua cartella:\n');
        console.log(this.userCard.rows);
        console.log('\n> Inizia l\'estrazione\n');
    }

    start() {
        //this.interval = setInterval(this.run, 1200);
        var t = this;
        this.interval = setInterval(function(){t.run();}, this.timeStep);
    }

    run() {
        if (this.mainCounter.numbers.length < 90 && this.combinationsLeft.length > 0) {
            this.number = this.mainCounter.extractNumber();
            console.log('Numero estratto > ' + this.number)

            let userComb = this.userCard.checkCombination(this.mainCounter.numbers)
            if (userComb && this.combinationsLeft.indexOf(userComb) > -1) {
                this.combinationsLeft.splice(this.combinationsLeft.indexOf(userComb), 1);
                console.log('>>>>>>>>>>>>>>>>>>>>>>>> Hai fatto ' + userComb)
                playerAudio.play('ding.wav', function(err){
                    if (err) throw err
                })
            }
            let computerComb = this.computerCard.checkCombination(this.mainCounter.numbers)
            if (computerComb && this.combinationsLeft.indexOf(computerComb) > -1) {
                this.combinationsLeft.splice(this.combinationsLeft.indexOf(computerComb), 1);
                console.log('!!!!!!!!!!!!!!!!!!!!!!!! Il computer ha fatto ' + computerComb)
                playerAudio.play('blong.wav', function(err){
                    if (err) throw err
                })
            }
        } else {
            console.log('\n> FINE DEL GIOCO');
            clearInterval(this.interval)
        }

    }
}

module.exports = Game;