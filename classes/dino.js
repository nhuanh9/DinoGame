function Dino() {
    this.height = 40;
    this.width = 96;
    this.speed = 10;
    this.x =  this.width;
    this.y = canvas.height - this.height*1.5;
    this.img = new Image();
    this.img.src = "Airplane-Left-Red-icon.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y);
    };
    this.moveDown = function () {
        if ( this.y <= (canvas.height - this.height*1.5)){
            this.speed = 2;
            this.y += this.speed;
        }
    };
    this.moveUp = function () {
        if (this.y > 30) {
            this.speed = 20;
            this.y -= this.speed;
        } else {
            alert("Game Over");
            document.location.reload();
        }
    }
}