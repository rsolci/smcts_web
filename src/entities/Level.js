class Level {
  constructor({ tileMap = [], backgroundImage, enemies = [], obstacles = [] }) {
    this.mapImage = new TiledImage({ image: backgroundImage, tileMap: tileMap, tileWidth: 35, tileHeight: 36 })
    this.player = new Player({
      image: resources.get('./images/sprites/mario.png'),
      width: 32,
      height: 32,
      totalFrames: 3,
      animationLoop: [0],
      startX: 107,
      startY: 255,
      framesPerSeconds: 4,
      playerSpeed: 40,
      respawnCallback: () => { this.player.moveTo({ x: 107, y: 255 }) }
    })
    this.enemies = enemies;
    this.levelBounds = [
      new GameObject({
        startX: -1, startY: 0, width: 1, height: 288
      }).setCollider(new Collider({
        x: -1, y: 0, width: 1, height: 288
      })),
      new GameObject({
        startX: 245, startY: 0, width: 1, height: 288
      }).setCollider(new Collider({
        x: 245, y: 0, width: 1, height: 288
      })),
      new GameObject({
        startX: 0, startY: -1, width: 245, height: 1
      }).setCollider(new Collider({
        x: 0, y: -1, width: 245, height: 1, 
      })),
      new GameObject({
        startX: 0, startY: 288, width: 245, height: 1
      }).setCollider(new Collider({
        x: 0, y: 288, width: 245, height: 1
      }))
    ]
    this.obstacles = obstacles;
    this.playerObstacles = [...this.obstacles, ...this.levelBounds];
  }

  movePlayer(direction) {
    this.player.tryMove({direction, possibleObstacles: this.playerObstacles})
  }

  update() {
    this.handleControls();
    this.player.update()
    this.enemies.forEach((enemy) => enemy.update())

    const enemyCollision = this.enemies.reduce((acc, enemy) => acc || this.player.collidesWith(enemy), false)

    if (enemyCollision) {
      this.player.death()
    }
  }

  handleControls() {
    if (input.isDown('DOWN') || input.isDown('s')) {
      this.movePlayer('DOWN');
    } else if (input.isDown('UP') || input.isDown('w')) {
      this.movePlayer('UP');
    } else if (input.isDown('RIGHT') || input.isDown('d')) {
      this.movePlayer('RIGHT');
    } else if (input.isDown('LEFT') || input.isDown('a')) {
      this.movePlayer('LEFT');
    } else {
      this.movePlayer('');
    }
  }

  getDrawableItems() {
    return []
  }

  drawables() {
    return [
      this.mapImage,
      ...this.obstacles,
      this.player,
      ...this.enemies,
      ...this.getDrawableItems()
    ]
  }

  render({ renderContext }) {
    this.drawables().sort((a, b) => a.drawOrder - b.drawOrder).forEach(item => {
      item.draw({renderContext})
    })
    // this.mapImage.draw({ renderContext })
    // this.obstacles.forEach((obstacle) => obstacle.draw({ renderContext }))
    // this.player.draw({ renderContext })
    // this.enemies.forEach((enemy) => enemy.draw({ renderContext }))
  }
}