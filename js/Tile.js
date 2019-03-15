class Tile {
  constructor(posX, posY, tileValue) {
    this._posX = posX;
    this._posY = posY;
    this._tileValue = tileValue;
    this._tileMerged = null; /* We start with a Tile not merged */
  }

  get tileValue() {
    return this._tileValue;
  }

  get posX() {
    return this._posX;
  }

  get posY() {
    return this._posY;
  }
  
  get tileMerged () {
    return this._tileMerged;
  }

  updatePosition(posX, posY) {
    this._posX = posX;
    this._posY = posY;
  }

  toString() {
    return "" + this._tileValue;
  }
}
