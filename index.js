const marioSpriteSheet = new Image();
marioSpriteSheet.src = "./images/sprites/mario.png";

const level1SpriteSheet = new Image();
level1SpriteSheet.src = "./images/sprites/level1.png";
level1TileMap = [ 
    [ 4, 5, 4, 5, 4, 5, 4 ],
    [ 7, 7, 7, 7, 7, 7, 7 ],
    [ 6, 6, 6, 6, 6, 6, 6 ],
    [ 6, 6, 6, 6, 6, 6, 6 ],
    [ 6, 6, 6, 6, 6, 6, 6 ],
    [ 6, 6, 6, 6, 6, 6, 6 ],
    [ 6, 6, 6, 6, 6, 6, 6 ],
    [ 0, 2, 2, 1, 2, 2, 3 ]
];

const map1Image = new TiledImage({image: level1SpriteSheet, tileMap: level1TileMap, tileWidth: 35, tileHeight: 36})

const mario = new Sprite({image: marioSpriteSheet, tileWidth: 32, tileHeight: 32})

var canvas = document.getElementById("game");
canvas.width = 245;
canvas.height = 289;

function update() {
    map1Image.draw(canvas.getContext("2d"))
    mario.draw(canvas.getContext("2d"))
}


function main () {
    update()

    window.requestAnimationFrame(main);
}
  
// Start the game loop as soon as the sprite sheet is loaded
// marioSpriteSheet.addEventListener("load", gameLoop);
level1SpriteSheet.addEventListener("load", () => {
    main()
});