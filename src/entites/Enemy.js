class Enemy {
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
            isTrigger:false, 
            width: width, 
            height: height, 
            x: startX, 
            y: startY
        });
    }

    update() {
        // TODO use some behaviour
        if (this.actualX > -this.sprite.tileWidth) {
            this.actualX -= (30 * Time.deltaTime);
        } else {
            this.actualX = this.startX;
        }
        this.sprite.update();
        this.collider.setPosition({
            x: this.actualX,
            y: this.actualY
        });
    }

    draw({renderContext}) {
        this.sprite.draw({
            renderContext, 
            x: this.actualX, 
            y: this.startY
        })
    }
}