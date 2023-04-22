document.body.style.margin = 0; //css to remove padding and scroll bars
document.body.style.overflow = `hidden`

// const cnv  = document.createElement ('canvas'); creates an html <canvas> element
// cnv.width  = window.innerWidth;
// cnv.height = innerHeight;
// document.body.appendChild (cnv); slots the cnv variable into the body of the HTML DOM
// const ctx = cnv.getContext ('2d'); returns a canvas reendering object to draw with

// lets try drawing a pink square to the canvas

const cnv = document.createElement('canvas');

cnv.width  = 400;
cnv.height = 400;

document.body.appendChild(cnv);

const ctx = cnv.getContext('2d');

//create turquoise background
ctx.fillStyle = 'turquoise';
ctx.fillRect (0, 0, cnv.width, cnv.height);

//create deeppink square
ctx.fillStyle = 'deeppink';
ctx.fillRect (150, 150, 100, 100);