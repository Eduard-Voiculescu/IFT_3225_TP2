class GameScoreManager {
    constructor (){
        this._moves = 0;
        this._score = 0;
    }

    get score() {
        return this._score;
    }

    set score(score) {
        this._score = score;
    }

    updateMoves() {
        this._moves++;
        return this._moves;
    }

    updateScore(value) {
        this._score += value * 2;
        return this._score;
    }
}