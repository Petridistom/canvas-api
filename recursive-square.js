// remove padding and scroll bar
document.body.style.margin = 0
document.body.style.overflow = 'hidden'

const cnv  = document.createElement('canvas')
cnv.width  = 400
cnv.height = 400
document.body.appendChild(cnv)

const ctx = cnv.getContext('2d')



requestAnimationFrame (draw_frame)

function draw_frame () {
// draw background 
ctx.fillStyle = 'lightgrey'
ctx.fillRect (0, 0, cnv.width, cnv.height)
recursive_square (150, 150, 100)

requestAnimationFrame (draw_frame)
}

function recursive_square (x, y, s) {
    // draw the initial square 
    ctx.strokeStyle   = 'white' 
    ctx.strokeRect (x, y, s, s)

    //end clause
    if (s > 1) {
        recursive_square (x + s, y/1.2, s/2)
    }
}