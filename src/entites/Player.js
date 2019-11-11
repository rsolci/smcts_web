class Player {
    constructor({image, totalFrames = 1, ticksPerFrame = 10, width, height, startX = 0, startY = 0, framesPerSeconds, playerSpeed = 10}) {
        this.sprite = new AnimatedSprite({
            image: image, 
            tileWidth: width, 
            tileHeight: height, 
            totalFrames: totalFrames,
            ticksPerFrame: ticksPerFrame,
            framesPerSeconds: framesPerSeconds
        })
        this.startX = startX;
        this.startY = startY;
        this.actualX = startX;
        this.actualY = startY;
        this.playerSpeed = playerSpeed;
        this.lastDirection = 0;
    }

    update() {
        if(input.isDown('DOWN') || input.isDown('s')) {
            this.actualY += this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([4, 5])
            this.lastDirection = 3;
        } else if(input.isDown('UP') || input.isDown('w')) {
            this.actualY -= this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([1,2])
            this.lastDirection = 0;
        } else if(input.isDown('RIGHT') || input.isDown('d')) {
            this.actualX += this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([7,8])
            this.lastDirection = 6;
        } else if(input.isDown('LEFT') || input.isDown('a')) {
            this.actualX -= this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([10,11])
            this.lastDirection = 9;
        } else {
            this.sprite.setAnimationLoop([this.lastDirection])
        }
        this.sprite.update();
    }

    draw({renderContext}) {
        this.sprite.draw({
            renderContext, 
            x: this.actualX, 
            y: this.actualY
        })
    }
}