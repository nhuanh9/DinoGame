let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let trees = [];
let treeNormals = [];
let dino = new Dino();
let score = 0;
let bird = new Clound("25382-2-flying-bird-hd-thumb.png", Math.floor(Math.random()*canvas.offsetWidth * 0.3+canvas.offsetWidth * 0.7));
let clound = new Clound("clound.png", canvas.offsetWidth);

function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#dddb00";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawBackground() {
    let img = new Image();
    img.src = "desert-background-simple-game-level-location-concept-hd-looping-animation_rfgqov0se_thumbnail-full01.png";
    ctx.drawImage(img, 0, 0)
}

function addTree() {
    let treeOnList = new Tree();
    trees.push(treeOnList)
}

setInterval(addTree, 3000);

function drawTree() {
    trees = trees.filter(e => e.status);
    trees.forEach(function (tree) {
        tree.draw(dino);
        tree.move();
    })
}

function addTreeNor() {
    let treeOnList = new TreeNormal();
    treeNormals.push(treeOnList)
}

setInterval(addTreeNor, 5000);

function drawTreeNor() {
    treeNormals = treeNormals.filter(e => e.status);
    treeNormals.forEach(function (treeNor) {
        treeNor.draw(dino);
        treeNor.move();
    })
}

function drawSt(cloud) {
    cloud.draw();
    cloud.move();
}

function moveTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawSt(clound);
    drawSt(bird);
    dino.draw();
    drawScore();
    drawTree();
    drawTreeNor();
    requestAnimationFrame(moveTree);
}

moveTree();
move = function () {
    dino.moveUp();
};

function moveDown() {
    dino.moveDown();
}

let moveDino = setInterval(moveDown, 10);
movIMG = function () {
    window.addEventListener('keydown', function () {
        if (dino.x >= 50) {
            move();
            clearInterval(moveDino);
        } else {
            moveDino = setInterval(moveDown, 10);
        }
    });
    window.addEventListener('keyup', function () {
        moveDino = setInterval(moveDown, 10);
    });
};
window.onload = function () {
    movIMG();
};