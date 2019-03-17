class Grid {
    constructor(size) {
        this._gridSize = size || 4;
        this._cells = [];
        // [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
        this._colors = ["#eee4da", "#ede0c8", "#f2b179","#f59563", "#f67c5f", 
                        "#f65e3b", "#edcf72", "#edcc61", "#edc850", "#edc53f", "#edc22e"];

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
        this.updateGrid(tile);
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
                this._cells[i].push(new Tile(i, j, 0));
            }
        }
    }

    randomPositionInitializer() {
        return Math.floor(Math.random() * this._gridSize);
    }

    /* @tile : Tile */
    updateGrid (tile) {
        /** changer le nombre de moves et le nombre de score */
        if (tile.tileValue != 0) {
            document.getElementById("grid-item-" + tile.posX + "-" + tile.posY).innerHTML = tile.tileValue;
            document.getElementById("grid-item-" + tile.posX + "-" + tile.posY).style.background = this.chooseColor(tile.tileValue);
        } else {
            document.getElementById("grid-item-" + tile.posX + "-" + tile.posY).innerHTML = "";
            document.getElementById("grid-item-" + tile.posX + "-" + tile.posY).style.background = "#eee4da59";
        }
    }

    chooseColor (tileValue) {
        return this._colors[(Math.log2(tileValue) - 1) % this._colors.length];
    }

    toString(){
        var string = "+-----+-----+-----+-----+\n";
        for (var i = 0; i < this._gridSize; i++){
            string += "+"
            for(var j = 0; j < this._gridSize; j++){
                if (this._cells[i][j] == 0) {
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

