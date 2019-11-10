const marioSpriteSheet = new Image();
marioSpriteSheet.src = "./images/sprites/mario.png";

function sprite (options) {
				
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.loop = options.loop

    that.render = function () {
        // Clear the canvas
        that.context.clearRect(0, 0, that.width, that.height)

        // Draw the animation
        that.context.drawImage(
           that.image,
           frameIndex * that.width / numberOfFrames,
           0,
           that.width / numberOfFrames,
           that.height,
           0,
           0,
           that.width / numberOfFrames,
           that.height);
    };

    that.update = function () {

        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
        
        	tickCount = 0;
        	
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {	
                // Go to the next frame
                frameIndex += 1;
            } else if (that.loop) {
                frameIndex = 0;
            }
        }
    }; 

    return that;
}

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

var canvas = document.getElementById("game");
canvas.width = 245;
canvas.height = 289;

var marioSprite = sprite({
    context: canvas.getContext("2d"),
    width: 640,
    height: 32,
    image: marioSpriteSheet,
    numberOfFrames: 20,
    ticksPerFrame: 4,
    loop: true
});


// function gameLoop () {

//     window.requestAnimationFrame(gameLoop);
    
//     // marioSprite.update();
//     // marioSprite.render();
//     map1Image.draw(canvas.getContext("2d"))
//   }
  
// // Start the game loop as soon as the sprite sheet is loaded
// marioSpriteSheet.addEventListener("load", gameLoop);
level1SpriteSheet.addEventListener("load", () => {
    map1Image.draw(canvas.getContext("2d"))
});