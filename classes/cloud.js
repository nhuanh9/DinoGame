function Cloud() {
    this.status = true;
    this.dx = Math.floor(Math.random() * (-2) - 1);
    this.dy = 0;
    this.width = 64;
    this.height = 64;
    this.x = Math.floor(Math.random() * canvas.offsetWidth * 0.3 + canvas.offsetWidth * 0.7);
    this.y = Math.floor(Math.random() * canvas.offsetHeight * 0.3 + canvas.offsetHeight * 0.1);;
    this.img = new Image();
    this.img.src = "25382-2-flying-bird-hd-thumb.png";
    this.draw = function (dino) {
        ctx.drawImage(this.img, this.x, this.y);
        this.collisionDetection();
        this.collisionDetectionDino(dino);
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
    this.collisionDetection = function () {
        if (this.x < 0) {
            this.status = false;
            score++;
        }
    };
    this.collisionDetectionDino = function(dino){
        let self = this;
        let isTouchXTree = self.x+20 > dino.x && self.x+20 < dino.x + dino.width;
        let isTouchYTree = self.y+20 > dino.y && self.y+20 < dino.y + dino.height;
        let isTouchXDino = dino.x > self.x+20 && dino.x < self.x + self.width;
        let isTouchYDino = dino.y > self.y+20 && dino.y < self.y + self.height;
        if ( (isTouchXTree && isTouchYTree)||(isTouchXDino && isTouchYDino)) {
            self.status = false;
            alert("GAME OVER");
            document.location.reload();
        }
    }
}