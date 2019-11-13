resources.load([
    './images/sprites/mario.png',
    './images/sprites/koopa32.png',
    './images/sprites/level1.png',
    './images/static/single_block.png'
]);

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

function init() {
    var canvas = document.getElementById("game");
    canvas.width = 245;
    canvas.height = 288;

    const drawContext = canvas.getContext("2d");

    const level1 = new Level({
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
                framesPerSeconds: 4
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
            })
        ]
    })

    // TODO better organization of this inner function
    function update() {
        level1.update()
    }

    function draw() {
        level1.render({renderContext:drawContext})
    }
    
    function mainLoop () {
        Time.tick()
        update()
        draw()
    
        window.requestAnimationFrame(mainLoop);
    }

    mainLoop()
}


resources.onReady(init);
  