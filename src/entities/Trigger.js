class Trigger {
  constructor({onCollide = ()=>{}, ...options}) {
    this.collider = new Collider({
      width: options.width-20, 
      height: options.height-20, 
      x: options.startX, 
      y: options.startY,
      xOffset: 10,
      yOffset: 10
    });
    this.onCollide = onCollide;
    this.obstacle = new Obstacle({
      image: resources.get('./images/sprites/level1.png'), 
      width: options.width,
      height: options.height,
      animationLoop: [8],
      startX: options.startX,
      startY: options.startY,
      framesPerSeconds: 4
    })
  }

  checkTrigger(otherCollider) {
    if (this.collider.collidesWith(otherCollider)) {
      this.onCollide(this.obstacle);
    }
  }

  draw({renderContext}) {
    renderContext.beginPath();
    renderContext.rect(this.collider.x, this.collider.y, this.collider.width, this.collider.height);
    renderContext.stroke();
  }
}