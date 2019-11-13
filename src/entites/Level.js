class Level {
    constructor({tileMap = [], backgroundImage, enemies = [], obstacles = []}) {
        this.mapImage = new TiledImage({image: backgroundImage, tileMap: tileMap, tileWidth: 35, tileHeight: 36})
        this.player = new Player({
            image: resources.get('./images/sprites/mario.png'), 
            width: 32, 
            height: 32, 
            totalFrames: 3,
            animationLoop: [0],
            startX: 107,
            startY: 255,
            framesPerSeconds: 4,
            playerSpeed: 40
        })
        this.enemies = enemies;
        this.obstacles = obstacles;
    }

    update() {
        this.player.update({possibleObstacles: this.obstacles})
        this.enemies.forEach((enemy) => enemy.update())

        const enemyCollision = this.enemies.reduce((acc, enemy) => acc || this.player.collidesWith(enemy), false)

        if(enemyCollision) {
            this.player.moveTo({x: 107, y: 255})
        }
    }

    render({renderContext}) {
        this.mapImage.draw({renderContext})
        this.enemies.forEach((enemy) => enemy.draw({renderContext}))
        this.obstacles.forEach((obstacle) => obstacle.draw({renderContext}))
        this.player.draw({renderContext})
    }
}