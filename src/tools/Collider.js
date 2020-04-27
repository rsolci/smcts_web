class Collider {
    constructor({isTrigger = false, width, height, x = 0, y = 0, xOffset = 0, yOffset = 0}) {
        this.isTrigger = isTrigger;
        this.width = width;
        this.height = height;
        this.x = x + xOffset;
        this.y = y + yOffset;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }

    setPosition({x, y}) {
        this.x = x + this.xOffset;
        this.y = y + this.yOffset;
    }

    collidesWith(other) {
        if (!other || !other.collider) {
            return false;
        }

        return (this.x + this.width) >= other.collider.x && (this.y + this.height) >= other.collider.y &&
            this.x < (other.collider.x + other.collider.width) && this.y < (other.collider.y + other.collider.height)
    }

    hardCollision(other) {
        return this.collidesWith(other) && !other.collider.isTrigger && !this.isTrigger;
    }
}