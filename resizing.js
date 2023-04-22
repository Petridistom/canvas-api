document.body.style.margin = 0; //css to remove padding and scroll bars
document.body.style.overflow = `hidden`

const cnv  = document.createElement ('canvas'); // creates an html <canvas> element
cnv.width  = window.innerWidth;
cnv.height = innerHeight;
document.body.appendChild (cnv); // slots the cnv variable into the body of the HTML DOM
const ctx = cnv.getContext ('2d'); // returns a canvas reendering object to draw with

ctx.fillStyle = 'lightgrey'
ctx.fillRect (0, 0, cnv.width, cnv.height)

let x = 0
requestAnimationFrame(draw_frame)
function draw_frame () {
    // draw the square 
    ctx.fillStyle = 'deeppink'
    ctx.fillRect (cnv.width / 2 - 50, cnv.height / 2 - 50, 100, 100)
    
    // recursion
    requestAnimationFrame(draw_frame)
}