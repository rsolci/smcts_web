class Entity extends Drawable {
  constructor({image, ticksPerFrame = 10, width, height, startX = 0, startY = 0, framesPerSeconds, animationLoop = [0], ...rest}) {
    super(rest)
    this.sprite = new AnimatedSprite({
        image: image, 
        tileWidth: width, 
        tileHeight: height, 
        ticksPerFrame: ticksPerFrame,
        framesPerSeconds: framesPerSeconds,
        animationLoop: animationLoop
    })
    this.startX = startX;
    this.startY = startY;
    this.actualX = startX;
    this.actualY = startY;
  }

  update() {
  }

  draw({renderContext}) {
    this.sprite.draw({
      renderContext, 
      x: this.actualX, 
      y: this.startY
    });

    renderContext.beginPath();
    renderContext.rect(this.actualX, this.actualY, this.sprite.width, this.sprite.height);
    renderContext.stroke();
  }
}