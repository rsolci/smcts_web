class Collider {
    constructor({isTrigger = false, width, height, x = 0, y = 0}) {
        this.isTrigger = isTrigger;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    setPosition({x, y}) {
        this.x = x;
        this.y = y;
    }

    collidesWith(other) {
        if (!other || !other.collider) {
            return false;
        }

        return (this.x + this.width) >= other.collider.x && (this.y + this.height) >= other.collider.y &&
            this.x < (other.collider.x + other.collider.width) && this.y < (other.collider.y + other.collider.height)
    }
}