class Platform extends Entity {
  constructor({ behaviour, ...options }) {
    super(options);
    this.behaviour = behaviour;
    this.collider = new Collider({
      isTrigger: true,
      width: options.width,
      height: options.height,
      x: options.startX,
      y: options.startY,
      xOffset: 0,
      yOffset: 0,
    });
  }

  update() {
    if (this.behaviour) {
      this.behaviour.move(this)
    }
  }
}