// get rid of the default document padding
document.body.style.margin   = 0
document.body.style.overflow = `hidden`

// create a canvas element
const cnv = document.createElement (`canvas`)

// append the canvas element to the document body
document.body.appendChild (cnv)

// get the canvas context
const ctx = cnv.getContext ('2d')

// call the fit to window function
// defined below
fit_to_window ()

// assign the fit to window function
// to the .onresize property
// of the window object
window.onresize = fit_to_window

// pass draw frame function in
// to initiate animation sequence
requestAnimationFrame (draw_frame)

// define the function that will draw frames
function draw_frame () {

    // defined below
    // mimicking p5's background ()
    background (`turquoise`)

    // fill with hotpink
    ctx.fillStyle = `hotpink`

    // defined below
    // mimicking p5's rectMode (CENTER)
    center_mode_square (cnv.width / 2, cnv.height / 2, 100)    

    // recursively call itself for ongoing animation
    requestAnimationFrame (draw_frame)
}

// fits the canvas element to 
// the dimensions of the viewport
function fit_to_window () {
    cnv.width  = window.innerWidth
    cnv.height = window.innerHeight
}

// accepts a colour
// and then covers the whole canvas
// with that colour
function background (c) {
    ctx.fillStyle = c
    ctx.fillRect (0, 0, cnv.width, cnv.height)        
}

// takes x and y coordinates, and size,
// and adjusts the x and y coordinates
// to specify the center of the square
// rather than the top left corner
function center_mode_square (x_pos, y_pos, size) {
    const h = size / 2
    const x = x_pos - h
    const y = y_pos - h

    ctx.fillRect (x, y, size, size)
}