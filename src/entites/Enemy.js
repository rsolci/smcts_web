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
            this.behaviour.move(this)
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
    constructor({xSpeed = 0, ySpeed = 0, loopMovement = true, resetX = 0}) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.loopMovement = loopMovement;
        this.resetX = resetX;
    }

    xMovement() {
        return this.xSpeed * Time.deltaTime
    }

    yMovement() {
        return this.ySpeed * Time.deltaTime
    }

    move(enemy) {
        const outOfScreenX = (this.xSpeed < 0 && enemy.actualX < -enemy.sprite.tileWidth); // TODO implement movement to the right
        if (outOfScreenX && this.loopMovement) {
            enemy.actualX = this.resetX;
        } else if (!outOfScreenX) {
            enemy.actualX += this.xMovement();
        }
        enemy.sprite.update();
        enemy.collider.setPosition({
            x: this.actualX,
            y: this.actualY
        });
    }
}