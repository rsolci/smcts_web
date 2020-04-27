class Enemy extends Entity {
    constructor({behaviour, ...options}) {
        super(options);
        this.behaviour = behaviour;
        this.collider = new Collider({
            isTrigger: true, 
            width: options.width-7, 
            height: options.height-4, 
            x: options.startX, 
            y: options.startY,
            xOffset: 4,
            yOffset: 2
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
    constructor({xSpeed = 0, ySpeed = 0, loopMovement = true, resetX = 0, screenWidth = 0}) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.loopMovement = loopMovement;
        this.resetX = resetX;
        this.screenWidth = screenWidth;
    }

    xMovement() {
        return this.xSpeed * Time.deltaTime
    }

    yMovement() {
        return this.ySpeed * Time.deltaTime
    }

    move(enemy) {
        const outOfScreenX = (this.xSpeed < 0 && enemy.actualX < -enemy.sprite.tileWidth) || (this.xSpeed > 0 && enemy.actualX > this.screenWidth); 
        if (outOfScreenX && this.loopMovement) {
            enemy.actualX = this.resetX;
        } else if (!outOfScreenX) {
            enemy.actualX += this.xMovement();
        }
        enemy.sprite.update();
        enemy.collider.setPosition({
            x: enemy.actualX,
            y: enemy.actualY
        });
    }
}