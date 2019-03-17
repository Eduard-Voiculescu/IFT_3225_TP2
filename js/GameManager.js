class GameManager {
    constructor(){
        this._size = document.getElementById("nParam").value || 4;
        this.startTiles = 2; // number of starting tiles 
        this._grid; // game grid
        this._hasMoved = false; // bug si la personne bougeait mais rien se passait
        this._gameScoreManager = new GameScoreManager();
        this._emptyCells = this._size * this._size; // the number of empty cells is equal at the height x width of the game
        this.keyboardPlayer();
        this.buttonListener();
        this.startGame();
    }

    buttonListener() {
        document.getElementById("restartButton").addEventListener("click", event=>{
            removeHTMLGrid();
            this.startGame();
        })
        document.getElementById("resizeButton").addEventListener("click", event=>{
            removeHTMLGrid();
            this.startGame();
        })
        document.getElementById("restartButtonGameOver").addEventListener("click", event=>{
            removeHTMLGrid();
            this.startGame();
        })
    }

    /* Keyboard listener */
    keyboardPlayer() {
        window.addEventListener("keydown", key => {
            if (key.keyCode == 37 || key.keyCode == 65) {
                this.left()
            } else if (key.keyCode == 38 || key.keyCode == 87) {
                this.up();
            } else if (key.keyCode == 39 || key.keyCode == 68) {
                this.right();
            } else if (key.keyCode == 40 || key.keyCode == 83) {
                this.down();
            }
            if (this._hasMoved) {
                var randomTile = this.addRandomTile();
                while (this._grid.cells[randomTile.posX][randomTile.posY].tileValue != 0) {
                    randomTile = this.addRandomTile();
                }
                this._grid.insertTile(randomTile);
                this.updateGameMoves();
                this._hasMoved = false;

            }
            this.toString();
            console.log(this._grid);
            this.updateGameState();
        });
    }
    left () {
        for (var i = 0; i < this._size; i++) {
            for (var j = 1; j < this._size; j++){ // the first column cannot go the the left
                console.log("left -> i: " + i + " j : " + j);
                if (this._grid.cells[i][j].tileValue != 0){
                    var column = j;
                    var value = this._grid.cells[i][column].tileValue;

                    // slide the Tile to the left until we get to the end or if we have to merge with another Tile
                    while (column > 0 && this._grid.cells[i][column - 1].tileValue == 0) {
                        this._grid.cells[i][column - 1].tileValue = value;
                        this._grid.cells[i][column].tileValue = 0;
                        column--;
                        this._hasMoved = true; 
                    }

                    // we have reached a Tile that has to be merged
                    if (column >= 1 && value == this._grid.cells[i][column - 1]) {
                        this._grid.cells[i][column - 1].tileValue = value * 2;
                        this._grid.cells[i][column].tileValue = 0;
                        this._hasMoved = true;
                        this.updateGameScore(value);
                    }
                }
            }
        }
        console.log("left button pressed");
    }

    up() {
        for (var i = 1; i < this._size; i++) {
            for (var j = 0; j < this._size; j++) {
                console.log("up -> i: " + i + " j : " + j);
                if (this._grid.cells[i][j].tileValue != 0) {
                    var row = i;
                    var value = this._grid.cells[row][j].tileValue;

                    // slide the Tile up untile we get to the end or if we have to merge with another Tile
                    while (row > 0 && this._grid.cells[row - 1][j].tileValue == 0){
                        this._grid.cells[row - 1][j].tileValue = value;
                        this._grid.cells[row][j].tileValue = 0;                        
                        row--;
                        this._hasMoved = true; 
                    }

                    // we have reached a TIle that has to be merged
                    if (row >= 1 && value == this._grid.cells[row - 1][j]) {
                        this._grid.cells[row - 1][j].tileValue = value * 2;
                        this._grid.cells[row][j].tileValue = 0;
                        this._hasMoved = true; 
                        this.updateGameScore(value);
                    }
                }
            }
        }
        console.log("up button pressed");
    }

    down() {
        for (var i = this._size - 2; i >= 0; i--) {
            for (var j = 0; j < this._size; j++) {
                console.log("down -> i: " + i + " j : " + j);
                if (this._grid.cells[i][j].tileValue != 0) {
                    var row = i;
                    var value = this._grid.cells[row][j].tileValue;
                    
                    // slide the Tile down until we get to the end or if we have to merge with another Tile
                    while (row < this._size - 1 && this._grid.cells[row + 1][j] == 0) {
                        this._grid.cells[row + 1][j].tileValue = value;
                        this._grid.cells[row][j].tileValue = 0;
                        row++;
                        this._hasMoved = true; 
                    }
    
                    // we have reacehd a Tile that has to be merged
                    if (row < this._size - 1 && value == this._grid.cells[row][j]) {
                        this._grid.cells[row + 1][j].tileValue = value * 2;
                        this._grid.cells[row][j].tileValue = 0;
                        this._hasMoved = true; 
                        this.updateGameScore(value);
                    }
                }
            }
        }
        console.log("down button pressed");
    }

    right() {
        for (var i = 0; i < this._size; i++) {
            for (var j = this._size - 2; j >= 0; j--) { // the last column cannot go to the right
                console.log("right -> i: " + i + " j : " + j);
                if (this._grid.cells[i][j].tileValue != 0) {
                    var column = j; // la colonne actuelle où la Tile se trouve
                    var value = this._grid.cells[i][column].tileValue;
                    
                    // slide the Tile to the right until we get to the end or if we have to merge with another Tile
                    while (column < this._size - 1 && this._grid.cells[i][column + 1].tileValue == 0) {
                        this._grid.cells[i][column + 1].tileValue = value;
                        this._grid.cells[i][column].tileValue = 0; 
                        column++;
                        this._hasMoved = true; 
                    }

                    // we have reached a Tile that has to be merged
                    if (column <= this._size -2 && value == this._grid.cells[i][column + 1]) {
                        this._grid.cells[i][column + 1].tileValue = value * 2; 
                        this._grid.cells[i][column].tileValue = 0;  
                        this._hasMoved = true;   
                        this.updateGameScore(value);
                    }
                }
            }
        }
        console.log("right button pressed");
    }

    updateGameState (){
        this._emptyCells = this._size * this._size;
        for (var i = 0; i < this._size; i++) {
            for (var j = 0; j < this._size; j++) {
                console.log(this._grid.cells[i][j]); 
                if (this._grid.cells[i][j] != 0){ 
                    this._emptyCells--;
                }
                this._grid.updateGrid(this._grid.cells[i][j]);
            }
        }
        if (this.isGameOver()){
            this.gameOver();
        }
    }

    updateGameScore (value) {
        var actualScore = this._gameScoreManager.updateScore(value);
        document.getElementById("scoreContainerResult").innerHTML = "" + actualScore;
    }

    updateGameMoves () {
        var actualMoves = this._gameScoreManager.updateMoves();
        document.getElementById("movesContainerBottom").innerHTML = "" + actualMoves;
    }

    isGameOver() {
        if (this._emptyCells == 0) {
            return true;
        }
        return false;
    }

    gameOver() {
        var gameOver = document.createElement("div");
    }

    initializeGrid() {
        this._grid = new Grid(this._size);
        console.log(this._grid);
        console.log("Grid size is : " + this._size);
    }

    // Add the starting tiles
    setupStartingTiles() {
        // var startingTiles = this.addRandomTile();
        var startingTile1 = this.addRandomTile();
        var startingTile2 = this.addRandomTile();
        while (startingTile1.posX == startingTile2.posX || startingTile1.posY == startingTile2.posY){
            startingTile2 = this.addRandomTile();
        }
        this._grid.insertTile(startingTile1);
        this._grid.insertTile(startingTile2);
    }

    // add 2 random tiles to the grid
    addRandomTile() {
        var position = this.chooseRandomTilePostion();
        return new Tile(position[0], position[1], this.randomValueGenerator());
    }

    chooseRandomTilePostion() {
        var position = [];
        position[0] = Math.floor(Math.random() * this._size)
        position[1] = Math.floor(Math.random() * this._size)
        return position;
    }

    randomValueGenerator (){
        if (Math.random() < 0.80) {
            return 2;
        } else {
            return 4;
        }
    };

    toString(){
        this._grid.toString();
    }

    // Start 2048 game
    setupGame(){
        this.initializeGrid();
        this.setupStartingTiles();
    }

    startGame() {
        initializeHTMLGrid();
        this.setupGame();
    }

}
