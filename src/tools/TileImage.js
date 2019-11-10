class TiledImage{
    constructor({image, tileWidth = 1, tileHeight = 1, tileMap = [[0]]}) {
        this.image = image;
        this.tileMap = tileMap;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }

    draw(renderContext) {
        for(let row = 0; row < this.tileMap.length; row++) {
            for(let column = 0; column < this.tileMap[row].length; column++) {
                const tileIndex = this.tileMap[row][column];
                renderContext.drawImage(
                    this.image,
                    tileIndex * this.tileWidth,
                    0,
                    this.tileWidth,
                    this.tileHeight,
                    column * this.tileWidth,
                    row * this.tileHeight,
                    this.tileWidth,
                    this.tileHeight);
            }
        }
    }
}