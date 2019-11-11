resources.load([
    './images/sprites/mario.png',
    './images/sprites/koopa32.png',
    './images/sprites/level1.png'
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
    canvas.height = 289;

    const drawContext = canvas.getContext("2d");

    const map1Image = new TiledImage({image: resources.get('./images/sprites/level1.png'), tileMap: level1TileMap, tileWidth: 35, tileHeight: 36})

    const mario = new Sprite({image: resources.get('./images/sprites/mario.png'), tileWidth: 32, tileHeight: 32})

    const greenKoopa = new Enemy({
        image: resources.get('./images/sprites/koopa32.png'), 
        width: 32, 
        height: 32, 
        totalFrames: 4,
        startX: 245,
        startY: 130,
        framesPerSeconds: 4
    })
    // TODO better organization of this inner function
    function update() {
        greenKoopa.update()
    }

    function draw() {
        map1Image.draw({renderContext:drawContext})
        mario.draw({renderContext:drawContext})
        greenKoopa.draw({renderContext:drawContext})
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
  