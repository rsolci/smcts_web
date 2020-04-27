class Obstacle extends Entity {
  constructor(options) {
    super(options)
    this.collider = new Collider({
      isTrigger: false, 
      width: options.width-4, 
      height: options.height-4, 
      x: options.startX, 
      y: options.startY,
      xOffset: 2,
      yOffset: 2
    });
    console.info(this.collider);
  }
}