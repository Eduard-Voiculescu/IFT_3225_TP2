class Grid {
    constructor(size) {
        this._gridSize = size || 4;
        this._cells = [];
        this.initializeCells(); // initialize the 2D game array
    }

    get gridSize() {
        return this._gridSize;
    }

    get cells() {
        return this._cells;
    }

    // Inserts tile in cell[tile.posX][tile.posY]
    insertTile (tile) {
        this._cells[tile.posX][tile.posY] = tile;
    }

    // check for the first available cell 
    availableCell(){
        var position = [];
        for (var i = 0; i < this._gridSize; i++) {
            for (var j = 0; j < this._gridSize; j++) {
                if (this._cells[i][j] == null) {
                    position[0] = i;
                    position[1] = j;
                    return position; 
                } 
            }
        }
        return null; // no available cells
    }

    // initialize the n x n grid with null objects 
    initializeCells() {
        for (var i = 0; i < this._gridSize; i++) {
            this._cells[i] = []; // create an n x n matrix
            for (var j = 0; j < this._gridSize; j++) {
                this._cells[i][j] = null;
            }
        }
    }

    randomPositionInitializer() {
        return Math.floor(Math.random() * this._gridSize);
    }

    toString(){
        var string = "+-----+-----+-----+-----+\n";
        for (var i = 0; i < this._gridSize; i++){
            string += "+"
            for(var j = 0; j < this._gridSize; j++){
                if (this._cells[i][j] == null) {
                    string += "     +";
                } else {
                    string += "  " + this._cells[i][j].toString() + "  +";
                }
            }
            string += "\n";
        }
        string += "+-----+-----+-----+-----+";
        console.log(string);
        return string;
    }
}

