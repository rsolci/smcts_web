class Sprite {
    constructor({image, tileWidth = 1, tileHeight = 1, frameIndex = 0}) {
        this.image = image;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.frameIndex = frameIndex;
    }

    draw({renderContext, x = 0, y = 0}) {
        renderContext.drawImage(
            this.image,
            this.frameIndex * this.tileWidth,
            0,
            this.tileWidth,
            this.tileHeight,
            x,
            y,
            this.tileWidth,
            this.tileHeight);
    }

    setFrame(frameIndex) {
        this.frameIndex = frameIndex;
    }
}

class AnimatedSprite extends Sprite {
    constructor({totalFrames = 1, framesPerSeconds = 10, ...args}) {
        super(args)
        this.totalFrames = totalFrames;
        this.framesPerSeconds = framesPerSeconds;
        this.frame = 0;
    }

    draw({renderContext, x = 0, y = 0}) {
        super.draw({renderContext, x, y});

        this.frame += this.framesPerSeconds * Time.deltaTime;
        this.frameIndex = Math.floor(this.frame);
        if (this.frameIndex >= this.totalFrames) {
            this.frameIndex = 0;
            this.frame = 0;
        }
    }
}