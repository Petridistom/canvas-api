// remove padding and scroll bar
document.body.style.margin = 0
document.body.style.overflow = 'hidden'

let x = 0
let y = 0

const cnv  = document.createElement('canvas');
cnv.width  = 600
cnv.height = 600
document.body.appendChild(cnv)

const ctx = cnv.getContext('2d')
ctx.fillStyle = 'black'
ctx.fillRect (0, 0, cnv.width, cnv.height) 

function drawPoint() {
    ctx.fillStyle = 'white'
    // strokeWeight(1)
    let px = map (x, -2.1820, 2.6558, 0, cnv.width)
    let py = map (y, 0, 9.9980, cnv.height, 0)
    ctx.fillRect (px ,py, 1, 1);  //possibly draws a rectangle at the next point that is the size of one pixel??
}

requestAnimationFrame (draw_frame)
function draw_frame () {
    for (let i = 0; i < 200; i++) { //do 200 times per frame
        drawPoint(); 
        nextPoint();
      }
    // call the next frame
    requestAnimationFrame(draw_frame)
}

function nextPoint () {
    let nextX
    let nextY
    
    let r = Math.random(1)
    
    if (r <= 0.01) {
    // 1
    nextX =  0;
    nextY =  0.16*y;
    } else if (r > 0.01 && r <= 0.86) {
    
    // 2
    nextX =  0.85*x +  0.04*y;
    nextY = -0.04*x +  0.85*y + 1.6;
    } else if (r > 0.86 && r <= 0.93) {
    
    // 3
    nextX =  0.20*x + -0.26*y;
    nextY =  0.23*x +  0.22*y + 1.6;
    } else {
   
     // 4
    nextX = -0.15*x +  0.28*y;
    nextY =  0.26*x +  0.24*y + 0.44;
    }
    
    x = nextX
    y = nextY
  }

  function map (v, i_min, i_max, o_min, o_max) {
    const i_range = i_max - i_min
    const o_range = o_max - o_min
    const i_norm  = (v -i_min) / i_range
    return i_norm * o_range + o_min
  }