let canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';

const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

let x = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, 0, 0);
    x -= gameSpeed;
    requestAnimationFrame(animate);
}

animate();

