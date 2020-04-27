class GameObject {
  constructor({startX = 0, startY = 0, width, height}) {
    this.startX = startX;
    this.startY = startY;
    this.actualX = startX;
    this.actualY = startY;
    this.width = width;
    this.height = height;
  }

  setSprite(sprite) {
    this.sprite = sprite;
    return this;
  }

  setCollider(collider) {
    this.collider = collider;
    return this;
  }

  moveTo({ x = 0, y = 0 }) {
    this.actualX = x;
    this.actualY = y;
  }
}