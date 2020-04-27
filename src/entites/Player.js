class Player {
    constructor({image, totalFrames = 1, ticksPerFrame = 10, 
            width, height, startX = 0, startY = 0, framesPerSeconds, 
            playerSpeed = 10, deathCallback = ()=>{}, respawnCallback = ()=>{}}) {
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
        this.alive = true;
        this.deathCallback = deathCallback;
        this.respawnCallback = respawnCallback;
        this.respawnTimer = 2;
        this.collider = new Collider({
            isTrigger:false, 
            width: width-4, 
            height: height-8, 
            x: startX, 
            y: startY,
            xOffset: 2,
            yOffset: 3
        });
    }

    update({possibleObstacles = []}) {
        if (!this.alive) {
            this.respawnTimer -= Time.deltaTime;
            if (this.respawnTimer <= 0) {
                this.respawnTimer = 2;
                this.alive = true;
                this.lastDirection = 0;
                this.respawnCallback();
            }
            return
        }
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
            this.sprite.setAnimationLoop([this.lastDirection])
        } else {
            // Free to walk
            this.actualX = xPos;
            this.actualY = yPos;
        }

        this.sprite.update();
    }

    collidesWith(other) {
        return this.collider.collidesWith(other);
    }

    moveTo({x = 0, y = 0}) {
        this.actualX = x;
        this.actualY = y;
        this.collider.setPosition({
            x: this.actualX,
            y: this.actualY
        });
    }

    death() {
        this.alive = false;
        if (this.lastDirection === 0) {
            this.sprite.setAnimationLoop([12])
        } else if (this.lastDirection === 3) {
            this.sprite.setAnimationLoop([13])
        } else if (this.lastDirection === 6) {
            this.sprite.setAnimationLoop([14])
        } else if (this.lastDirection === 9) {
            this.sprite.setAnimationLoop([15])
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