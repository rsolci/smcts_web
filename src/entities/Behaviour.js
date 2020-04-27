class MovementRepeatBehaviour {
  constructor({ xSpeed = 0, ySpeed = 0, loopMovement = true, resetX = 0, screenWidth = 0 }) {
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.loopMovement = loopMovement;
    this.resetX = resetX;
    this.screenWidth = screenWidth;
  }

  xMovement() {
    return this.xSpeed * Time.deltaTime
  }

  yMovement() {
    return this.ySpeed * Time.deltaTime
  }

  move(gameObject) {
    const outOfScreenX = (this.xSpeed < 0 && gameObject.actualX < -gameObject.width) || (this.xSpeed > 0 && gameObject.actualX > this.screenWidth);
    if (outOfScreenX && this.loopMovement) {
      gameObject.actualX = this.resetX;
    } else if (!outOfScreenX) {
      gameObject.actualX += this.xMovement();
    }
  }
}