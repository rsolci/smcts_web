const level1TileMap = [ 
  [ 4, 5, 4, 5, 4, 5, 4 ],
  [ 7, 7, 7, 7, 7, 7, 7 ],
  [ 6, 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6, 6 ],
  [ 6, 6, 6, 6, 6, 6, 6 ],
  [ 0, 2, 2, 1, 2, 2, 3 ]
];

class Level1 extends Level {
  constructor() {
    super({
      tileMap: level1TileMap,
      backgroundImage: resources.get('./images/sprites/level1.png'),
        enemies: [
            new Enemy({
                image: resources.get('./images/sprites/koopa32.png'), 
                width: 32, 
                height: 32, 
                animationLoop: [0,1,2,3],
                startX: 245,
                startY: 130,
                framesPerSeconds: 4,
                behaviour: new EnemyBehaviour({xSpeed: -30, resetX: 245})
            }),
            new Enemy({
                image: resources.get('./images/sprites/koopa32.png'), 
                width: 32, 
                height: 32, 
                animationLoop: [0,1,2,3],
                startX: 365,
                startY: 130,
                framesPerSeconds: 4,
                behaviour: new EnemyBehaviour({xSpeed: -30, resetX: 245})
            }),
            new Enemy({
                image: resources.get('./images/sprites/koopaV32.png'), 
                width: 32, 
                height: 32, 
                animationLoop: [0,1,2,3],
                startX: -32,
                startY: 175,
                framesPerSeconds: 4,
                behaviour: new EnemyBehaviour({xSpeed: 30, resetX: -32, screenWidth: 245})
            }),
            new Enemy({
                image: resources.get('./images/sprites/koopaV32.png'), 
                width: 32, 
                height: 32, 
                animationLoop: [0,1,2,3],
                startX: -142,
                startY: 175,
                framesPerSeconds: 4,
                behaviour: new EnemyBehaviour({xSpeed: 30, resetX: -32, screenWidth: 245})
            }),
            new Enemy({
                image: resources.get('./images/sprites/Birdo40.png'), 
                width: 40, 
                height: 40, 
                animationLoop: [0,1,2,3],
                startX: -40,
                startY: 75,
                framesPerSeconds: 6,
                behaviour: new EnemyBehaviour({xSpeed: 40, resetX: -40, screenWidth: 245})
            }),
            new Enemy({
                image: resources.get('./images/sprites/goomba25.png'), 
                width: 25, 
                height: 25, 
                animationLoop: [0,1],
                startX: 245,
                startY: 225,
                framesPerSeconds: 4,
                behaviour: new EnemyBehaviour({xSpeed: -40, resetX: 245, screenWidth: 245})
            }),
            new Enemy({
                image: resources.get('./images/sprites/goomba25.png'), 
                width: 25, 
                height: 25, 
                animationLoop: [0,1],
                startX: 345,
                startY: 225,
                framesPerSeconds: 4,
                behaviour: new EnemyBehaviour({xSpeed: -40, resetX: 245, screenWidth: 245})
            })
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
  }

  update() {
    super.update()
  }
}