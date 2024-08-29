const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let doIStop = false;

if(!ctx){
    throw new Error("ctx error");
}

const imageData = ctx.createImageData(1,1);
const data = imageData.data;

data[0] = 255;
data[1] = 255;
data[2] = 255;
data[3] = 255;

function handleKeyPress(event: KeyboardEvent){
    if (event.key=='q'){
        doIStop = true;
    }
}

function draw(){
    if(!ctx){
        throw new Error("ctx error");
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let x=0; x<canvas.width; x++){
        for (let y=0; y<canvas.height; y++){
            if (Math.random()<0.01){
                ctx.putImageData(imageData, x, y);
            }
        }
    }

    if (!doIStop){
        requestAnimationFrame(draw);
    }
}

window.addEventListener("keypress", handleKeyPress);
draw();

