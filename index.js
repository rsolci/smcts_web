resources.load([
    './images/sprites/mario.png',
    './images/sprites/koopa32.png',
    './images/sprites/level1.png',
    './images/static/single_block.png',
    './images/sprites/koopaV32.png',
    './images/sprites/Birdo40.png',
    './images/sprites/goomba25.png'
]);

function init() {
    var canvas = document.getElementById("game");
    canvas.width = 245;
    canvas.height = 288;

    const drawContext = canvas.getContext("2d");

    const level1 = new Level1();

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

    Time.tick()
    mainLoop()
}


resources.onReady(init);
  