const marioSpriteSheet = new Image();
marioSpriteSheet.src = "./images/sprites/mario.png";

console.info(marioSpriteSheet);

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

var canvas = document.getElementById("game");
canvas.width = 32;
canvas.height = 32;

var marioSprite = sprite({
    context: canvas.getContext("2d"),
    width: 640,
    height: 32,
    image: marioSpriteSheet,
    numberOfFrames: 20,
    ticksPerFrame: 4,
    loop: true
});


function gameLoop () {

    window.requestAnimationFrame(gameLoop);
    
    marioSprite.update();
    marioSprite.render();
  }
  
// Start the game loop as soon as the sprite sheet is loaded
marioSpriteSheet.addEventListener("load", gameLoop);