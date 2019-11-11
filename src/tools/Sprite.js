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
    constructor({framesPerSeconds = 10, animationLoop = [0], ...args}) {
        super(args)
        this.totalFrames = animationLoop.length;
        this.framesPerSeconds = framesPerSeconds;
        this.frameIndex = animationLoop[0];
        this.frame = 0;
        this.animationLoop = animationLoop;
    }

    setAnimationLoop(animationLoop = [0]) {
        this.animationLoop = animationLoop;
        this.totalFrames = animationLoop.length;
    }

    update() {
        this.frame += this.framesPerSeconds * Time.deltaTime;
        if (this.frame >= this.totalFrames) {
            this.frame = 0;
        }
        this.frameIndex = this.animationLoop[Math.floor(this.frame)]
    }
}