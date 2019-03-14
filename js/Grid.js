class Grid {
    constructor(size) {
        this._gridSize = size || 4;
        this._cells = new Array(this._gridSize);
        this.initializeCells();
    }

    /* ---------- Getters ---------- */
    get gridSize() {
        return this._gridSize;
    }

    get cells() {
        return this._cells;
    }
    /* ---------- Getters ---------- */

    insertTile (tile) {
        this._cells[tile.posX][tile.posY] = tile;
    }

    availableCell(){
        for (var i = 0; i < this._gridSize; i++) {
            for (var j = 0; j < this._gridSize; j++) {
                if (this._cells[i][j] != undefined) {
                    return this._cells[i][j]; 
                } 
            }
        }
        return null; // no available cells
    }

    initializeCells() {
        for (var i = 0; i < this._gridSize; i++) {
            this._cells[i] = new Array(this._gridSize); // create an n x n matrix
        }
    }
    
    randomValueGenerator (){
        if (Math.random() < 0.50) {
            return 2;
        } else {
            return 4;
        }
    };

    randomPositionInitializer() {
        return Math.floor(Math.random() * this._gridSize);
    }

    toString(){
        var string = "+-----+-----+-----+-----+\n";
        for (var i = 0; i < this._gridSize; i++){
            string += "+"
            for(var j = 0; j < this._gridSize; j++){
                string += "  " + this._cells[i][j].toString() + "  +";
            }
            string += "\n";
        }
        string += "+-----+-----+-----+-----+";
        console.log(string);
        return string;
    }
}

