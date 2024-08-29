var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var doIStop = false;
if (!ctx) {
    throw new Error("ctx error");
}
var imageData = ctx.createImageData(1, 1);
var data = imageData.data;
data[0] = 255;
data[1] = 255;
data[2] = 255;
data[3] = 255;
function handleKeyPress(event) {
    if (event.key == 'q') {
        doIStop = true;
    }
}
function draw() {
    if (!ctx) {
        throw new Error("ctx error");
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var x = 0; x < canvas.width; x++) {
        for (var y = 0; y < canvas.height; y++) {
            if (Math.random() < 0.01) {
                ctx.putImageData(imageData, x, y);
            }
        }
    }
    if (!doIStop) {
        requestAnimationFrame(draw);
    }
}
window.addEventListener("keypress", handleKeyPress);
draw();
