class Enemy extends Entity {
  constructor({ behaviour, ...options }) {
    super({drawOrder: 10, ...options});
    this.behaviour = behaviour;
    this.collider = new Collider({
      isTrigger: true,
      width: options.width - 7,
      height: options.height - 4,
      x: options.startX,
      y: options.startY,
      xOffset: 4,
      yOffset: 2
    });
  }

  update() {
    if (this.behaviour) {
      this.behaviour.move(this)
    }
  }
}