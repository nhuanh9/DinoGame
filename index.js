let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let trees = [];
let treeNormals = [];
let dino = new Dino();
let score = 0;
let birds = [];

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
function addBird() {
    let bird = new Cloud();
    birds.push(bird)
}

setInterval(addBird, 8000);

function drawBird() {
    birds = birds.filter(e => e.status);
    birds.forEach(function (bird) {
        bird.draw(dino);
        bird.move();
    })
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

function moveTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBird();
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