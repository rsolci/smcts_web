class Level1 extends Level {
  constructor() {
    const tileMap = [ 
      [ 4, 5, 4, 5, 4, 5, 4 ],
      [ 7, 7, 7, 7, 7, 7, 7 ],
      [ 6, 6, 6, 6, 6, 6, 6 ],
      [ 6, 6, 6, 6, 6, 6, 6 ],
      [ 6, 6, 6, 6, 6, 6, 6 ],
      [ 6, 6, 6, 6, 6, 6, 6 ],
      [ 6, 6, 6, 6, 6, 6, 6 ],
      [ 0, 2, 2, 1, 2, 2, 3 ]
    ];
    const greenKoopaBehaviour = new MovementRepeatBehaviour({xSpeed: -30, resetX: 245});
    const redKoopaBehaviour = new MovementRepeatBehaviour({xSpeed: 30, resetX: -32, screenWidth: 245});
    const goombaBehaviour = new MovementRepeatBehaviour({xSpeed: -40, resetX: 245, screenWidth: 245});
    super({
      tileMap: tileMap,
      backgroundImage: resources.get('./images/sprites/level1.png'),
        enemies: [
            // new Enemy({
            //     image: resources.get('./images/sprites/koopa32.png'), 
            //     width: 32, 
            //     height: 32, 
            //     animationLoop: [0,1,2,3],
            //     startX: 245,
            //     startY: 130,
            //     framesPerSeconds: 4,
            //     behaviour: greenKoopaBehaviour
            // }),
            // new Enemy({
            //     image: resources.get('./images/sprites/koopa32.png'), 
            //     width: 32, 
            //     height: 32, 
            //     animationLoop: [0,1,2,3],
            //     startX: 365,
            //     startY: 130,
            //     framesPerSeconds: 4,
            //     behaviour: greenKoopaBehaviour
            // }),
            // new Enemy({
            //     image: resources.get('./images/sprites/koopaV32.png'), 
            //     width: 32, 
            //     height: 32, 
            //     animationLoop: [0,1,2,3],
            //     startX: -32,
            //     startY: 175,
            //     framesPerSeconds: 4,
            //     behaviour: redKoopaBehaviour
            // }),
            // new Enemy({
            //     image: resources.get('./images/sprites/koopaV32.png'), 
            //     width: 32, 
            //     height: 32, 
            //     animationLoop: [0,1,2,3],
            //     startX: -142,
            //     startY: 175,
            //     framesPerSeconds: 4,
            //     behaviour: redKoopaBehaviour
            // }),
            // new Enemy({
            //     image: resources.get('./images/sprites/Birdo40.png'), 
            //     width: 40, 
            //     height: 40, 
            //     animationLoop: [0,1,2,3],
            //     startX: -40,
            //     startY: 75,
            //     framesPerSeconds: 6,
            //     behaviour: new MovementRepeatBehaviour({xSpeed: 40, resetX: -40, screenWidth: 245})
            // }),
            // new Enemy({
            //     image: resources.get('./images/sprites/goomba25.png'), 
            //     width: 25, 
            //     height: 25, 
            //     animationLoop: [0,1],
            //     startX: 245,
            //     startY: 225,
            //     framesPerSeconds: 4,
            //     behaviour: goombaBehaviour
            // }),
            // new Enemy({
            //     image: resources.get('./images/sprites/goomba25.png'), 
            //     width: 25, 
            //     height: 25, 
            //     animationLoop: [0,1],
            //     startX: 345,
            //     startY: 225,
            //     framesPerSeconds: 4,
            //     behaviour: goombaBehaviour
            // })
        ],
        obstacles: [
            new Obstacle({
                image: resources.get('./images/static/single_block.png'), 
                width: 35,
                height: 36,
                animationLoop: [0],
                startX: 0,
                startY: 0,
                framesPerSeconds: 4
            }),
            new Obstacle({
                image: resources.get('./images/static/single_block.png'), 
                width: 35,
                height: 36,
                animationLoop: [0],
                startX: 70,
                startY: 0,
                framesPerSeconds: 4
            }),
            new Obstacle({
                image: resources.get('./images/static/single_block.png'), 
                width: 35,
                height: 36,
                animationLoop: [0],
                startX: 140,
                startY: 0,
                framesPerSeconds: 4
            }),
            new Obstacle({
                image: resources.get('./images/static/single_block.png'), 
                width: 35,
                height: 36,
                animationLoop: [0],
                startX: 210,
                startY: 0,
                framesPerSeconds: 4
            })
        ]
    })
    this.platform = new Platform({
      image: resources.get('./images/static/tronco70_36.png'), 
      width: 70,
      height: 36,
      animationLoop: [0],
      startX: 245,
      startY: 36,
      framesPerSeconds: 4,
      behaviour: new MovementRepeatBehaviour({xSpeed: -30, resetX: 245, screenWidth: 245})
    });
    this.waterLane = new DangerArea({
      x: 0, y: 38, width: 245, height: 32
    });
    this.triggers = [
      new Trigger({
        image: resources.get('./images/sprites/level1.png'), 
        width: 35,
        height: 36,
        animationLoop: [8],
        startX: 175,
        startY: 0,
        framesPerSeconds: 4,
        onCollide: (obstacle) => { 
          this.player.respawnCallback();
          this.playerObstacles.push(obstacle)
          this.obstacles.push(obstacle)
        }
      }),
      new Trigger({
        image: resources.get('./images/sprites/level1.png'), 
        width: 35,
        height: 36,
        animationLoop: [8],
        startX: 105,
        startY: 0,
        framesPerSeconds: 4,
        onCollide: (obstacle) => { 
          this.player.respawnCallback();
          this.playerObstacles.push(obstacle)
          this.obstacles.push(obstacle)
        }
      }),
      new Trigger({
        image: resources.get('./images/sprites/level1.png'), 
        width: 35,
        height: 36,
        animationLoop: [8],
        startX: 35,
        startY: 0,
        framesPerSeconds: 4,
        onCollide: (obstacle) => { 
          this.player.respawnCallback();
          this.playerObstacles.push(obstacle)
          this.obstacles.push(obstacle)
        }
      })
    ]
  }

  getDrawableItems() {
    return [
      ...super.getDrawableItems(), this.platform
    ]
  }

  update() {
    this.triggers.forEach(trigger => {
      trigger.checkTrigger(this.player.gameObject);
    })
    if (this.platform.isInside(this.player.gameObject)) {
      const xMovement = this.platform.behaviour.xMovement()
      this.player.tryMove({direction: 'CARRY', deltaX: xMovement, possibleObstacles: this.playerObstacles})
    } else {
      if (this.playerInWaterLane()) {
        this.player.moveTo({
          x: this.player.gameObject.actualX,
          y: this.waterLane.gameObject.actualY
        })
        this.player.death({spriteIndex: 16});
      }
    }
    super.update();
    this.platform.update();
  }

  playerInWaterLane() {
    return this.waterLane.isInside(this.player.gameObject)
  }
}