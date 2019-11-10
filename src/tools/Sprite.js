class Sprite {
    constructor({image, tileWidth = 1, tileHeight = 1, frameIndex = 0}) {
        this.image = image;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.frameIndex = frameIndex;
    }

    draw(renderContext) {
        renderContext.drawImage(
            this.image,
            this.frameIndex * this.tileWidth,
            0,
            this.tileWidth,
            this.tileHeight,
            0,
            0,
            this.tileWidth,
            this.tileHeight);
    }

    setFrame(frameIndex) {
        this.frameIndex = frameIndex;
    }
}