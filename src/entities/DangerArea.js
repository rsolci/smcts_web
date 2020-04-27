class DangerArea {
  constructor({x = 0, y = 0, width= 0, height = 0}) {
    this.gameObject = new GameObject({
      startX: x, startY: y, width: width, height: height
    });
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