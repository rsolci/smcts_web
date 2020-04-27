class Player extends Drawable {
  constructor({ image, totalFrames = 1, ticksPerFrame = 10,
    width, height, startX = 0, startY = 0, framesPerSeconds,
    playerSpeed = 10, deathCallback = () => { }, respawnCallback = () => { } }) {
    super({ drawOrder: 5 })
    this.gameObject = new GameObject({
      startX, startY, width, height
    });
    this.gameObject.setSprite(new AnimatedSprite({
      image: image,
      tileWidth: width,
      tileHeight: height,
      totalFrames: totalFrames,
      ticksPerFrame: ticksPerFrame,
      framesPerSeconds: framesPerSeconds
    }));
    this.gameObject.setCollider(new Collider({
      isTrigger: false,
      width: width - 4,
      height: height - 8,
      x: startX,
      y: startY,
      xOffset: 2,
      yOffset: 3
    }));
    
    this.playerSpeed = playerSpeed;
    this.lastDirection = 0;
    this.alive = true;
    this.deathCallback = deathCallback;
    this.respawnCallback = respawnCallback;
    this.respawnTimer = 2;
  }

  tryMove({direction, possibleObstacles = [], deltaX}) {
    if (!this.alive) {
      return;
    }
    let xPos = this.gameObject.actualX;
    let yPos = this.gameObject.actualY;
    if (direction === 'DOWN') {
      yPos += this.playerSpeed * Time.deltaTime;
      this.gameObject.sprite.setAnimationLoop([4, 5])
      this.lastDirection = 3;
    } else if (direction === 'UP') {
      yPos -= this.playerSpeed * Time.deltaTime;
      this.gameObject.sprite.setAnimationLoop([1, 2])
      this.lastDirection = 0;
    } else if (direction === 'RIGHT') {
      xPos += this.playerSpeed * Time.deltaTime;
      this.gameObject.sprite.setAnimationLoop([7, 8])
      this.lastDirection = 6;
    } else if (direction === 'LEFT') {
      xPos -= this.playerSpeed * Time.deltaTime;
      this.gameObject.sprite.setAnimationLoop([10, 11])
      this.lastDirection = 9;
    } else if (direction === 'CARRY') {
      xPos += deltaX;
    } else {
      this.gameObject.sprite.setAnimationLoop([this.lastDirection])
    }

    // Move only collider first
    this.gameObject.collider.setPosition({
      x: xPos,
      y: yPos
    });

    const anyColision = possibleObstacles.reduce((acc, possibleObstacle) => acc || this.gameObject.collider.hardCollision(possibleObstacle), false);
    if (anyColision) {
      // Hit some obstacle, revert collider move
      this.gameObject.collider.setPosition({
        x: this.gameObject.actualX,
        y: this.gameObject.actualY
      });
      this.gameObject.sprite.setAnimationLoop([this.lastDirection])
    } else {
      // Free to walk
      this.moveTo({
        x: xPos,
        y: yPos
      })
    }
  }

  update() {
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

    this.gameObject.sprite.update();
  }

  collidesWith(other) {
    return this.gameObject.collider.collidesWith(other);
  }

  moveTo({ x = 0, y = 0 }) {
    this.gameObject.moveTo({
      x: x,
      y: y
    })
    this.gameObject.collider.setPosition({
      x: this.gameObject.actualX,
      y: this.gameObject.actualY
    });
  }

  death() {
    this.alive = false;
    if (this.lastDirection === 0) {
      this.gameObject.sprite.setAnimationLoop([12])
    } else if (this.lastDirection === 3) {
      this.gameObject.sprite.setAnimationLoop([13])
    } else if (this.lastDirection === 6) {
      this.gameObject.sprite.setAnimationLoop([14])
    } else if (this.lastDirection === 9) {
      this.gameObject.sprite.setAnimationLoop([15])
    }
    this.gameObject.sprite.update();
  }

  draw({ renderContext }) {
    this.gameObject.sprite.draw({
      renderContext,
      x: this.gameObject.actualX,
      y: this.gameObject.actualY
    })
  }
}