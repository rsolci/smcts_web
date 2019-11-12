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
        this.collider = new Collider({
            isTrigger:false, 
            width: width, 
            height: height, 
            x: startX, 
            y: startY
        });
    }

    update({possibleObstacles = []}) {
        let xPos = this.actualX;
        let yPos = this.actualY;
        if(input.isDown('DOWN') || input.isDown('s')) {
            yPos += this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([4, 5])
            this.lastDirection = 3;
        } else if(input.isDown('UP') || input.isDown('w')) {
            yPos -= this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([1,2])
            this.lastDirection = 0;
        } else if(input.isDown('RIGHT') || input.isDown('d')) {
            xPos += this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([7,8])
            this.lastDirection = 6;
        } else if(input.isDown('LEFT') || input.isDown('a')) {
            xPos -= this.playerSpeed * Time.deltaTime;
            this.sprite.setAnimationLoop([10,11])
            this.lastDirection = 9;
        } else {
            this.sprite.setAnimationLoop([this.lastDirection])
        }

        // Move only collider first
        this.collider.setPosition({
            x: xPos,
            y: yPos
        });
        
        const anyColision = possibleObstacles.reduce((acc, possibleObstacle) => acc || this.collider.hardCollision(possibleObstacle), false);
        if(anyColision) {
            // Hit some obstacle, revert collider move
            this.collider.setPosition({
                x: this.actualX,
                y: this.actualY
            });
        } else {
            // Free to walk
            this.actualX = xPos;
            this.actualY = yPos;
        }

        this.sprite.update();
    }

    collidesWith(other) {
        if (this.collider.collidesWith(other)) {

        }
    }

    draw({renderContext}) {
        this.sprite.draw({
            renderContext, 
            x: this.actualX, 
            y: this.actualY
        })
    }
}