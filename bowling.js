class Game {
  constructor() {
    this.rolls = [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6];
    // this.rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    this.currentScore = 0;
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    var currentPosition = 0;
    var currentScore = 0;
    var i = 0;

    while (i < 10) {
    // for (let i = 0; i < 10; i++) {
    if (this.rolls[currentPosition] == 10) {
      currentScore += 10 + this.rolls[currentPosition + 1] + this.rolls[currentPosition + 2];
      currentPosition++
    } else if ((this.rolls[currentPosition] + this.rolls[currentPosition + 1]) == 10) {
      currentScore += this.rolls[currentPosition] + this.rolls[currentPosition + 1] + this.rolls[currentPosition + 2];
      currentPosition += 2;
    } else {
      currentScore += (this.rolls[currentPosition] + this.rolls[currentPosition + 1]);
      currentPosition += 2;
    }
    i++;
  }
  console.log('Rolls total ' + this.rolls.reduce((a, v) => a + v, 0));
console.log('Current score ' + currentScore);
return currentScore;
  }

};

var game = new Game();

// game.roll(1);
// game.roll(4);
// console.log(game.score() == 5);

// console.log(game.score() == 300);
console.log(game.score() == 133);





