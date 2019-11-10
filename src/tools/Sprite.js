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
    constructor({totalFrames = 1, ticksPerFrame = 10, ...args}) {
        super(args)
        this.totalFrames = totalFrames;
        this.ticksPerFrame = ticksPerFrame;
        this.tickCount = 0; // TODO revisit this tick logic
    }

    draw({renderContext, x = 0, y = 0}) {
        super.draw({renderContext, x, y});
        if (this.tickCount > this.ticksPerFrame) {
            if (this.frameIndex < this.totalFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
            this.tickCount = 0;
        } else {
            this.tickCount++;
        }
    }
}