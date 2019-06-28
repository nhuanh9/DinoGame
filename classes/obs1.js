function TreeNormal() {
    this.status = true;
    this.dx = -4;
    this.dy = 0;
    this.width = 56;
    this.height = 90;
    this.x = canvas.offsetWidth-this.width;
    this.y = canvas.offsetHeight - this.height*1.05;
    this.img = new Image();
    this.img.src = "Xmas-Tree-icon.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y);
        this.collisionDetection();
        this.collisionDetectionDino(dino);
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
    this.collisionDetection = function () {
        if (this.x < 0){
            this.status = false;
            score++;
        }
    };
    this.collisionDetectionDino = function(dino){
        let self = this;
        let isTouchXTree = self.x+10 > dino.x && self.x+10 < dino.x + dino.width;
        let isTouchYTree = self.y+20 > dino.y && self.y+20 < dino.y + dino.height;
        let isTouchXDino = dino.x > self.x+10 && dino.x < self.x + self.width;
        let isTouchYDino = dino.y > self.y+20 && dino.y < self.y + self.height;
        if ( (isTouchXTree && isTouchYTree)||(isTouchXDino && isTouchYDino)) {
            self.status = false;
            alert("GAME OVER");
            document.location.reload();
        }
    }
}