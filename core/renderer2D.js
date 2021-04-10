// the underscore prefix to names tries to indicate
// that these functions are not intended for direct use

// Note for creation of renderable types; types must have a field that is a function called 'render'
// It is advised to hook into the GameObject class or at least the Transform2D class
// If you don't hook into the GameObject structure, you need to figure out your own way of updating your renderable
// (if you hook into the GameObject structure, simply supply the renderable the gameobject.sprite 
// - and update the gameobject.transform to adjust renderable )
//


///
const CANVASDEFAULTS = {
    fontSize: 16,
    backgroundFillStyle: "lightblue",
    sizePropertionOfInnerWindowX: 1,
    sizePropertionOfInnerWindowY: 1
}


/** Sprites and Spritesheet section */

class Sprite {
    constructor(src, gameObject) {
        this.src = src
        this.gameObject = gameObject
        this.image = new Image()
        this.image.src = this.src

        this.render = function () {
            _drawSprite(this.image, this.gameObject)
        }
    }
}
class SpriteSheet {
    constructor(gameObject, image, animationAtlas) {
        this.gameObject = gameObject
        this.image = image
        this.atlas = animationAtlas
        this.animationName // supply name of Animation Segment // to be clear: signifies current animation-segment of spritesheet being drawn
        this.nextFrameNumber = 1 // 
        this.play = true // decides if animation should be moved along; false will display the last 
        this.repeat = true
        this.secondsBetweenFrames = 1
        this.timeSinceLastFrame = 10000

        this.render = function () {
            if (this.animationName) {
                _drawAnimationFrame(this)
            }
        }
    }
}
/** An Instance hold AnimationsSegments for a particular spritesheet, defining areas for animation. */
class AnimationAtlas {
    constructor(segments) {
        this.segments = {}
        segments.forEach(segment => {
            this.put(segment)
        });
    }

    put = function (segment) {
        this.segments[segment.name] = segment
    }
}
/*** An instance defines a part of an image as an animation */
class AnimationSegment {
    constructor(name, startX, startY, fWidth, fHeight, numberOfFrames, numberOfRows, numberOfColumns) {
        this.name = name
        this.startX = startX
        this.startY = startY
        this.fWidth = fWidth
        this.fHeight = fHeight
        this.numberOfFrames = numberOfFrames
        this.numberOfColumns = numberOfColumns
        this.numberOfRows = numberOfRows
    }
}

/// modification to RenderText and text drawing: possibility to render unstroked text

class RenderText {
    constructor(textString, gameObject, size = CANVASDEFAULTS.fontSize, font = "italic " + size + "px Unknown Font, sans-serif", textAlignment = "center", strokeStyle = "black") {
        this.text = textString
        this.font = font
        this.size = size
        this.textAlignment = textAlignment
        this.strokeStyle = strokeStyle
        this.fillStyle = strokeStyle //fillStyle defaults to provided strokeStyle, which defaults to 'black'
        this.filledText = true // stroked text is default
        this.strokedText = false
        this.gameObject = gameObject

        this.render = function () {
            _drawText(this)
        }
    }
}

/** Shapes from before Matter.js and polygon rendering, disuse please */
class Circle {
    constructor(gameObject, radius, parentAdjustment = { x: 0, y: 0 }, filled = true, stroked = false, fillStyle = "#212121", strokeStyle = "black") {
        this.gameObject = gameObject,
            this.transform = gameObject.transform, // the 'positional' that keeps track of spatial information
            this.parentAdjustment = parentAdjustment,
            this.radius = radius,
            this.fillStyle = fillStyle,
            this.stroked = stroked,
            this.filled = filled,
            this.strokeStyle = strokeStyle,

            this.render = function () {
                _drawCircle(this)
            }
    }
}

class Rectangle {
    constructor(gameObject, width, height, parentAdjustment = { x: 0, y: 0 }, filled = true, stroked = false, fillStyle = "#212121", strokeStyle = "black") {
        this.gameObject = gameObject,
            this.width = width,
            this.height = height,
            this.parentAdjustment = parentAdjustment,
            this.filled = filled,
            this.stroked = stroked,
            this.fillStyle = fillStyle,
            this.strokeStyle = strokeStyle,

            this.getArea = function () {
                return this.width * this.height
            }

        this.render = function () {
            _drawRectangle(this)
        }
    }
}

class RegularPolygonMatter { // bad name, class clicks with matter.js, but is otherwise unassociated
    constructor(gameObject, numberOfSides, radius, filled = true, stroked = false, fillStyle = "#212121", strokeStyle = "black") {
        this.gameObject = gameObject,
            this.numberOfSides = numberOfSides,
            this.radius = radius,
            this.filled = filled,
            this.stroked = stroked,
            this.fillStyle = fillStyle,
            this.strokeStyle = strokeStyle,
            // creating and saving vertices
            this.vertices = _createRegularPolygonVertices(numberOfSides, radius),
            this.render = function () {
                _drawRegularPolygon(this)
            }
        // create vertex
    }
}
// Creates points for reg pol. and returns an array of vectors 'outlining' that shape
function _createRegularPolygonVertices(numberOfSides, radius) {

    // rotation per point in radians
    let rotationPerSide = ((Math.PI * 2) / numberOfSides)
    let vertices = new Array()

    for (i = 0; i < numberOfSides; i++) {
        let xCurrent = radius * Math.cos(rotationPerSide * i)
        let yCurrent = radius * Math.sin(rotationPerSide * i)
        let vertex = { x: xCurrent, y: yCurrent }
       console.log("Another vertice exists: " + vertex.x + " " + vertex.y)

        vertices.push(vertex)
    }
    return vertices
}
// Helpful article: https://www.arungudelli.com/html5/html5-canvas-polygon/

/** RENDERING / DRAWING functions : with better polygons, i guess only  */

function _drawRegularPolygon(regularPolyToRotate) {


    if (regularPolyToRotate.numberOfSides < 3) return;
    ctx.save()
    ctx.beginPath();

    for (let i = 0; i < regularPolyToRotate.gameObject.qualia.body.vertices.length; i++) {

        ctx.lineTo(regularPolyToRotate.gameObject.qualia.body.vertices[i].x, regularPolyToRotate.gameObject.qualia.body.vertices[i].y);

    }
    ctx.closePath();

    if (regularPolyToRotate.filled) {
        ctx.fillStyle = regularPolyToRotate.fillStyle
        ctx.fill()
    }
    if (regularPolyToRotate.stroked) {
        ctx.strokeStyle = regularPolyToRotate.strokeStyle
        ctx.stroke()
    }
    ctx.restore()
}

function _rotatePolygon(vertices, rotation) {
    returnVertices = vertices.slice()

    // Converting degree to radians! 
    degree = rotation 
    // degree = rotation * (Math.PI / 180)

    for (let i = 0; i < vertices.length; ++i) {
        let vertex = {x:0,y:0}
        // Storing the previous values so they 
        // don't get overwritten 
        let x = vertices[i].x, y = vertices[i].y

        vertex.x = x * Math.cos(degree) - y * Math.sin(degree)
        vertex.x = x * Math.sin(degree) + y * Math.cos(degree)

        returnVertices[i] = vertex
    }
    // console.log(returnVertices)
    return returnVertices
}

function _drawRectangle(rectangle) {

    actualWidth = rectangle.width * rectangle.gameObject.transform.scale
    actualHeight = rectangle.height * rectangle.gameObject.transform.scale

    startX = (rectangle.gameObject.transform.position.x + rectangle.parentAdjustment.x) - actualWidth / 2
    startY = rectangle.gameObject.transform.position.y + rectangle.parentAdjustment.y - actualHeight / 2

    ctx.save()
    ctx.beginPath()
    _rotateForDraw(rectangle, rectangle.gameObject)

    if (rectangle.filled) {
        ctx.fillStyle = rectangle.fillStyle
        ctx.rect(startX, startY, actualWidth, actualHeight)
        ctx.fill()
    }

    if (rectangle.stroked) {
        ctx.strokeStyle = rectangle.strokeStyle
        ctx.rect(startX, startY, actualWidth, actualHeight)
        ctx.stroke()
    }

    ctx.restore()
}

function _drawCircle(circle) {

    actualX = circle.transform.position.x + circle.parentAdjustment.x
    actualY = circle.transform.position.y + circle.parentAdjustment.y

    ctx.save()
    ctx.beginPath()
    ctx.arc(actualX, actualY, circle.radius * circle.transform.scale, 2 * Math.PI, false)

    if (circle.filled) {
        ctx.fillStyle = circle.fillStyle
        ctx.fill()
    }
    if (circle.stroked) {
        ctx.strokeStyle = circle.strokeStyle
        ctx.stroke()
    }
    ctx.restore()
}

function _drawText(renderText) {
    ctx.save()
    ctx.beginPath()
    ctx.font = renderText.font
    ctx.textAlign = renderText.textAlignment;
    if (renderText.filledText) {
        ctx.fillStyle = renderText.fillStyle
        ctx.fillText(renderText.text, renderText.gameObject.transform.position.x, renderText.gameObject.transform.position.y)
    }
    if (renderText.strokedText) {
        ctx.strokeStyle = renderText.strokeStyle
        ctx.strokeText(renderText.text, renderText.gameObject.transform.position.x, renderText.gameObject.transform.position.y)
    }
    ctx.restore()
}

function _drawSprite(image, gameObject) {

    if (gameObject.activeInScene) { // i believe this check shoudl be moved to the local render() method calling this method
        ctx.save()

        if (gameObject.transform.rotation != 0) { // this is actually dumb, because it would prevent negative rotations... hmm // somewhat dumber, it doesn't. it's good
            _rotateForDraw(image, gameObject)
        }
        ctx.drawImage(image, gameObject.transform.position.x - image.width / 2, gameObject.transform.position.y - image.height / 2)

        ctx.restore()
    } else {
        console.log("Sprite::drawSprit rendering requested on INACTIVE GameObject name: " + gameObject.name + " [ID: " + gameObject.id + "] This is a mistake, check gameloop code.")
    }
}

function _drawAnimationFrame(spritesheet) {

    let animation = spritesheet.atlas.segments[spritesheet.animationName] // find right animation by name

    // calculate column and row numbers
    let columnNumber = Math.floor(spritesheet.nextFrameNumber / (animation.numberOfRows + 1)) // column is equal to 'frame #' divided by 'number of members in a row' minus 1 
    let rowNumber = (spritesheet.nextFrameNumber - columnNumber * animation.numberOfRows) - 1 // row is equal to frame # minus the product of column found times number of members in row minus 1
    //console.log("Frame no: " + nextFrameNumber+"\tColumn: " + columnNumber + "\tRow: "+ rowNumber )

    let sheetXStart = animation.startX + animation.fWidth * rowNumber
    let sheetYStart = animation.startY + animation.fHeight * columnNumber
    //console.log("Frame Sheet\t X Start: \t"+sheetXStart+"\tY start: "+ sheetYStart)

    ctx.save()

    _rotateForDraw(spritesheet.image, spritesheet.gameObject)

    ctx.drawImage(spritesheet.image, sheetXStart, sheetYStart, animation.fWidth, animation.fHeight, spritesheet.gameObject.transform.position.x, spritesheet.gameObject.transform.position.y, animation.fWidth * spritesheet.gameObject.transform.scale, animation.fHeight * spritesheet.gameObject.transform.scale)

    ctx.restore()

    // determine next frame - refactor
    if (!spritesheet.repeat && spritesheet.nextFrameNumber === animation.numberOfFrames) { return }

    if (spritesheet.play) {

        // check if it is time for the next frame
        spritesheet.timeSinceLastFrame += HEART.deltaTime
        if (spritesheet.timeSinceLastFrame >= spritesheet.secondsBetweenFrames) {

            spritesheet.timeSinceLastFrame = 0
            spritesheet.nextFrameNumber++
            if (spritesheet.nextFrameNumber > animation.numberOfFrames) { spritesheet.nextFrameNumber = 1 }
        }
    }
}

// Method rotates canvas according gameobject transform rotation
// recentering the canvas on the gameobject for drawing
function _rotateForDraw(image, gameObject) {
    shapeXCenter = gameObject.transform.position.x
    shapeYCenter = gameObject.transform.position.y

    // move center of canvas to center of image
    ctx.translate(shapeXCenter, shapeYCenter)

    ctx.rotate(gameObject.transform.rotation * (Math.PI / 180))

    ctx.translate(-shapeXCenter, -shapeYCenter)
}

// function defaults to fitting canvas to brower window inner height
function _adjustCanvas(x = 1, y = x) {
    canvas.height = window.innerHeight * y * CANVASDEFAULTS.sizePropertionOfInnerWindowY
    canvas.width = window.innerWidth * x * CANVASDEFAULTS.sizePropertionOfInnerWindowX
}

// clears canvas by drawing on top of it. for whole scene rendering, call adjustCanvas before 
function _clearCanvas() {
    ctx.save()
    ctx.fillStyle = CANVASDEFAULTS.backgroundFillStyle
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.restore()
}


function hideSystemCursor(hide=true) {
    if(hide) {
        ctx.canvas.style = "cursor: none;"
    }else{
        ctx.canvas.style = "cursor: default;"
    }
}
