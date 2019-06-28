function Clound(src,x,speed) {
    this.status = true;
    this.dx = speed;
    this.dy = 0;
    this.width = 64;
    this.height = 64;
    this.x = x;
    this.y = this.height*0.1;
    this.img = new Image();
    this.img.src = src;
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y);
        this.collisionDetection();
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
    this.collisionDetection = function () {
        if (this.x < 0){
            this.x = x;
            this.y = this.height*0.1;
        }
    };
}