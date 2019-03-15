class GameManager {
    constructor(size){
        this._size = size || 4;
        this.startTiles = 2; // number of starting tiles 
        this._grid; // game grid
        this.initializeGrid();
        this.setUpGame();
    }

    initializeGrid() {
        this._grid = new Grid(this._size);
        console.log(this._grid);
        
        console.log("Grid size is : " + this._size);
    }

    // Add the starting tiles
    setUpStartingTiles() {
        var startingTiles = this.addRandomTile();
        console.log(startingTiles);
        for (var i = 0; i < startingTiles.length; i++) {
            this._grid.insertTile(startingTiles[i]);
        }
    }

    // add 2 random tiles to the grid
    addRandomTile() {
        var tile1 = this.chooseRandomTile();
        var tile2 = this.chooseRandomTile();
        while (tile1[0] == tile2[0] || tile1[1] == tile2[1]) {
            tile2 = this.chooseRandomTile();
        }
        return [new Tile(tile1[0], tile1[1], this.randomValueGenerator()), 
                new Tile(tile2[0], tile2[1], this.randomValueGenerator())]
    }

    chooseRandomTile() {
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
    setUpGame(){
        this.setUpStartingTiles();
        this.startGame();
    }

    startGame() {
        this.toString();
    }

}
