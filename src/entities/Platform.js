class Platform extends Entity {
  constructor({ behaviour, ...options }) {
    super(options);
    this.gameObject = new GameObject({
      startX: options.startX, startY: options.startY, width: options.width, height: options.height
    });
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
      this.behaviour.move(this.gameObject)
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

    // renderContext.beginPath();
    // renderContext.rect(this.gameObject.actualX, this.gameObject.actualY, this.gameObject.width, this.gameObject.height);
    // renderContext.stroke();
  }

  carry(gameObjectToCarry) {
    if (this.behaviour) {
      this.behaviour.move(gameObjectToCarry)
    }
  }

  isInside(gameObject) {
    const middleX = gameObject.actualX+(gameObject.width/2);
    const middleY = gameObject.actualY+(gameObject.height/2);
    return (middleX > this.gameObject.actualX && 
      middleX < this.gameObject.actualX+this.gameObject.width && 
      middleY > this.gameObject.actualY && 
      middleY < this.gameObject.actualY+this.gameObject.height);
  }
}