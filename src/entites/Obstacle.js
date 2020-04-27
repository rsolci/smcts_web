class Obstacle {
    constructor({image, ticksPerFrame = 10, width, height, startX = 0, startY = 0, framesPerSeconds, animationLoop = [0]}) {
        this.sprite = new AnimatedSprite({
            image: image, 
            tileWidth: width, 
            tileHeight: height, 
            ticksPerFrame: ticksPerFrame,
            framesPerSeconds: framesPerSeconds,
            animationLoop: animationLoop
        })
        this.startX = startX;
        this.startY = startY;
        this.actualX = startX;
        this.actualY = startY;
        this.collider = new Collider({
            isTrigger: false, 
            width: width-4, 
            height: height-4, 
            x: startX, 
            y: startY,
            xOffset: 2,
            yOffset: 2
        });
    }

    update() {
    }

    draw({renderContext}) {
        this.sprite.draw({
            renderContext, 
            x: this.actualX, 
            y: this.startY
        });
    }
}