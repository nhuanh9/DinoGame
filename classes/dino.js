function Dino() {
    this.height = 80;
    this.width = 80;
    this.speed = 10;
    this.x =  this.width;
    this.y = canvas.height - this.height;
    this.img = new Image();
    this.img.src = "dino-icon.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y);
    };
    this.moveDown = function () {
        if ( this.y <= (canvas.height - this.height)){
            this.speed = 2;
            this.y += this.speed;
        }
    };
    this.moveUp = function () {
        if (this.y > 0) {
            this.speed = 20;
            this.y -= this.speed;
        } else {
            alert("Game Over");
            document.location.reload();
        }
    }
}