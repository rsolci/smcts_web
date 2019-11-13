class Enemy {
    constructor({image, ticksPerFrame = 10, width, height, startX = 0, startY = 0, framesPerSeconds, animationLoop = [0], behaviour}) {
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
        this.behaviour = behaviour;
        this.collider = new Collider({
            isTrigger: true, 
            width: width, 
            height: height, 
            x: startX, 
            y: startY
        });
    }

    update() {
        if (this.behaviour) {
            // TODO implement other movements
            if (this.actualX > -this.sprite.tileWidth) {
                this.actualX += this.behaviour.xMovement();
            } else {
                this.actualX = this.startX;
            }
            this.sprite.update();
            this.collider.setPosition({
                x: this.actualX,
                y: this.actualY
            });
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

class EnemyBehaviour {
    constructor({xSpeed = 0, ySpeed = 0}) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    xMovement() {
        return this.xSpeed * Time.deltaTime
    }

    yMovement() {
        return this.ySpeed * Time.deltaTime
    }
}