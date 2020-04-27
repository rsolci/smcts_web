class Enemy extends Entity {
  constructor({ behaviour, ...options }) {
    super({drawOrder: 10, ...options});
    this.gameObject = new GameObject({
      startX: options.startX, startY: options.startY, width: options.width, height: options.height
    })
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
      this.behaviour.move(this.gameObject)
      this.sprite.update();
      this.collider.setPosition({
        x: this.gameObject.actualX,
        y: this.gameObject.actualY
      });
    }
  }

  draw({renderContext}) {
    this.sprite.draw({
      renderContext, 
      x: this.gameObject.actualX, 
      y: this.gameObject.startY
    });
  }
}