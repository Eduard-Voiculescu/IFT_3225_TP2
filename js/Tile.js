class Tile {
  constructor(posX, posY, tileValue) {
    this._posX = posX;
    this._posY = posY;
    this._tileValue = tileValue;
    this._tileMerged = false;
  }

  get tileValue() {
    return this._tileValue;
  }

  set tileValue(tileValue) {
    this._tileValue = tileValue;
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
  
  set tileMerged(tileMerged) {
    this._tileMerged = tileMerged;
  }

  updatePosition(posX, posY) {
    this._posX = posX;
    this._posY = posY;
  }

  toString() {
    return "" + this._tileValue;
  }
}
