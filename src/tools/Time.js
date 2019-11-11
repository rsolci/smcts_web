const Time = {
    deltaTime: 0,
    lastFrameTime: 0,
    tick: function() {
        const now = Date.now();
        this.deltaTime = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;
    }
}