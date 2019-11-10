class Enemy {
    constructor({image, totalFrames = 1, ticksPerFrame = 10, width, height, startX = 0, startY = 0}) {
        this.sprite = new AnimatedSprite({
            image: image, 
            tileWidth: width, 
            tileHeight: height, 
            totalFrames: totalFrames,
            ticksPerFrame: ticksPerFrame
        })
        this.startX = startX;
        this.startY = startY;
        this.actualX = startX;
        this.width
    }

    update() {
        // TODO use some behaviour with time elapsed
        if (this.actualX > -this.sprite.tileWidth) {
            this.actualX--;
        } else {
            this.actualX = this.startX;
        }
    }

    draw({renderContext}) {
        this.sprite.draw({
            renderContext, 
            x: this.actualX, 
            y: this.startY
        })
    }
}