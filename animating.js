//animating can be done using requestAnimationFrame:
// HOW TO WRITE THE P5 DRAW FUNCTION IN PLANE JAVASCRIPT

// remove padding and scroll bar
document.body.style.margin = 0
document.body.style.overflow = 'hidden'

const cnv = document.createElement('canvas');
cnv.width  = window.innerWidth
cnv.height = window.innerHeight
document.body.appendChild(cnv)

const ctx = cnv.getContext('2d')


let x_pos = -100 // initialise mutible variable
                 // outisde draw_frame function

                
// pass in the name of the function
// requestAnimationFrame will call it
requestAnimationFrame (draw_frame)

// define the function you want
// requestAnimationFrame to call it
function draw_frame () {

    // draw the background
    ctx.fillStyle = 'turquoise'
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    // draw the pink square at its current x-coordinate
    ctx.fillStyle = 'deeppink'
    ctx.fillRect (x_pos, cnv.height / 2, 100, 100)

    // increment the x_pos
    x_pos += 2

    // respawn it on the left once it leaves the frame
    if (x_pos > cnv.width) {
        x_pos = -100
    }

    // call the next frame
    requestAnimationFrame(draw_frame)
}

// dont forget to call requestAnimationFrame inside the draw_frame function
// so that it recalls itself and always draws the next frame

// this is a type of recursive function, a function that calls itself