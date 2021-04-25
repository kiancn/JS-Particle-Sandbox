let ctx
const SCENEMANAGER = new SceneManager() // manages all objects in scene / canvas / sheet

/* represents the CONTENTS of the simulated field*/
const field = []
/* represents the state of each position in field as bools:
* false means that a position has had no change current frame
* true means that a position has already changed during current frame
* The purpose is to prevent a field from changing state many times during a single frame.
* */
const fieldStatuses = []
/* member represent the surrounding of each position in the field  */
const fieldSurroundingSquares = []


let dotSize = 10 // size of individual dot
let distFactor = 1 // proportional distance between dots (actual distance will change with dot size distance)
let dotDist = dotSize * distFactor

let drawingOffsetX = 0 // x pixel-distance from window left edge
let drawingOffsetY = 0 // y  pixel-distance from window top

let sbHeight, sbWidth, fieldSize

const colorNone = "#0a0a0a"
// const colorNone = "rgba(255, 255, 255, 0.9)";
const colorGround = "#834c0f"
const colorSand = "#929222"
const colorWater = "#106dcb"
const colorGas = "#a19897"

// placement variables
let numberToPlace = 2


let drawingCursor
let keydownHandler

const ELEMENT = {
    gas: 4,
    water: 3,
    sand: 2,
    ground: 1,
    none: 0,
    blocked: -1
}

let indexesUpdatedLastTurn = [0]

let currentPlacementElement = ELEMENT.sand

let rand = 1

window.addEventListener("load", function () {
    setup()
})

// initialize all variables and start scene
function setup() {
    let canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    // CANVASDEFAULTS.sizePropertionOfInnerWindowY = .9
    // CANVASDEFAULTS.sizePropertionOfInnerWindowX = .5
    _adjustCanvas()

    // calculate sandbox size dependent on canvas size, taking dot size and distance between dots into account
    sbHeight = Math.round((ctx.canvas.height) / (dotSize * distFactor))
    sbWidth = Math.round((ctx.canvas.width) / (dotSize * distFactor))

    console.log("Field is " + sbHeight + " boxes high.")
    console.log("Field is " + sbWidth + " boxes wide.")

    createFieldKeeper();
    createDrawingCursorHandler();
    createKeydownHandler();
    createFPSTextObject();

    GAMEINPUT.startDetectingInput()
    SCENEMANAGER.GAMELOOP.doLoop()
}

function createFieldKeeper() {
    let fieldKeeper = new GameObject("Field Keeper", {
        update: function (gameObject) {
            updateField()
            updateField()
         //   updateField()
            //   updateField()
            drawGrid()
            //   drawGridNumberOverlay()
        }
    })
    initField()
    SCENEMANAGER.includeInScene(fieldKeeper, 0)
}

function createDrawingCursorHandler() {
    // this GO 'places' dots on the canvas space
    drawingCursor = new GameObject("Pen", {
        drawing: false,
        update: function (gameObject) {


            if (gameObject.qualia.drawing) {
                // OVERALL: calculate cell touched
                const baseX = GAMEINPUT.mouse.x
                const baseY = GAMEINPUT.mouse.y

                const offsetX = baseX - drawingOffsetX
                const offsetY = baseY - drawingOffsetY

                const gridX = Math.floor(offsetX / dotDist)
                const gridY = Math.floor(offsetY / dotDist)

                fieldIndex = gridX + (gridY * sbWidth)

                switch (currentPlacementElement) {
                    case ELEMENT.water:
                        setFields_RhumbusFormation(numberToPlace, fieldIndex, ELEMENT.water,
                            getRandomInInterval(-40, 40), getRandomInInterval(-15, 30))
                        setFields_Box(numberToPlace, fieldIndex + getRandomInInterval(-3, 6), ELEMENT.water)
                        break;
                    case ELEMENT.sand:
                        setFields_RhumbusFormation(numberToPlace, fieldIndex, ELEMENT.sand,
                            getRandomInInterval(-10, 20), getRandomInInterval(-15, 30))
                        break;
                    case ELEMENT.ground:
                        setFields_Box(numberToPlace, fieldIndex, ELEMENT.ground,
                            getRandomInInterval(-10, 20), getRandomInInterval(-5, 10))
                        break;
                    case ELEMENT.gas:
                        setFields_RhumbusFormation(numberToPlace, fieldIndex, ELEMENT.gas,
                            getRandomInInterval(-10, 20), getRandomInInterval(-5, 10))
                        setFields_Box(numberToPlace, fieldIndex + getRandomInInterval(-3, 6), ELEMENT.gas)
                        break;
                    case ELEMENT.none:
                        setFields_Box(1, fieldIndex - 1, ELEMENT.none)
                        break;
                }


                surSqaures = new SurroundingSquares(fieldIndex)

                ctx.fillStyle = "white"
                ctx.fillText("[X: " + gridX + "] [Y: " + gridY + "] ::: field[" + fieldIndex + "]", 25, 25)
                ctx.fillText(surSqaures.toString(), 25, 40)
            }
        },
        playerInput: function () {
            drawingCursor.qualia.drawing = true
        },
        mouseUp: function () {
            drawingCursor.qualia.drawing = false
        }
    })
    document.addEventListener("mouseup", drawingCursor.qualia.mouseUp)
    GAMEINPUT.subscribeToMouseDown(drawingCursor)
    SCENEMANAGER.includeInScene(drawingCursor, 0, 2)
}

function createKeydownHandler() {
    keydownHandler = new GameObject("Keydown Handler", {
        update: function (gameObject) {
        },
        playerInput: function (keyStroke, gameObject) {
            gameObject.sprite.text = keyStroke + " NOT DEFINED"

            switch (keyStroke) {
                case "m" :
                    numberToPlace = numberToPlace - 1 < 1 ? 1 : numberToPlace - 1
                    break;
                case "k" :
                    numberToPlace = numberToPlace + 1 < 1 ? 1 : numberToPlace + 1
            }
            gameObject.sprite.text = "Number placing " + numberToPlace + " each frame mouse button is pushed";

            try {

                switch (parseInt(keyStroke)) {
                    case 1 :
                        currentPlacementElement = ELEMENT.sand;
                        gameObject.sprite.text = keyStroke + " SAND"
                        break;
                    case 2 :
                        currentPlacementElement = ELEMENT.water;
                        gameObject.sprite.text = keyStroke + " WATER"
                        break;
                    case 3 :
                        currentPlacementElement = ELEMENT.ground;
                        gameObject.sprite.text = keyStroke + " GROUND"
                        break;
                    case 4 :
                        currentPlacementElement = ELEMENT.none;
                        gameObject.sprite.text = keyStroke + " NOTHING"
                        break;
                    case 5 :
                        currentPlacementElement = ELEMENT.gas
                        gameObject.sprite.text = keyStroke + " GAS"
                }
            } catch (e) {
                console.log("Input was not a number")
            }
        }
    }, true, ctx.canvas.width / 2, 40)
    keydownHandler.sprite = new RenderText("You can draw elements! Press 1 - 5 for options.",
        keydownHandler, 65, "36px Consolas", "center", "green")

    GAMEINPUT.subscribeToKeyDown(keydownHandler)

    SCENEMANAGER.includeInScene(keydownHandler)
}

let fpsRenderTextGameObject;
let framesSinceStart = 0;

function createFPSTextObject() {
    fpsRenderTextGameObject = new GameObject("FPS Text", {

        deltaHistory: 0,
        update: function (gameObject) {

            framesSinceStart = framesSinceStart + 1

            gameObject.qualia.deltaHistory = performance.now() - gameObject.qualia.deltaHistory

            // update only every second frame
            if (framesSinceStart % 10 === 0) {
                gameObject.sprite.text = ("FPS " + Math.floor(framesSinceStart / (gameObject.qualia.deltaHistory / 1000))).toString()
            }
        }
    }, true)
    fpsRenderTextGameObject.transform.position.x = ctx.canvas.width - 90
    fpsRenderTextGameObject.transform.position.y = 60

    fpsRenderTextGameObject.sprite = new RenderText("FPS",
        fpsRenderTextGameObject, 65, "25px Courier New", "center", "white")
    SCENEMANAGER.includeInScene(fpsRenderTextGameObject, 5)
}


function initField() {
    totalPushed = 0
    for (i = 0; i < sbWidth; i++) {
        for (j = 0; j < sbHeight; j++) {
            field.push(ELEMENT.none)
            fieldSurroundingSquares.push(new SurroundingSquares(totalPushed))
            fieldStatuses.push(false)
            totalPushed++
        }
    }
    console.log("Total fields pushed: " + totalPushed)

    fieldSize = totalPushed

    // making ground
    let lastLineStartIndex = (sbHeight * sbWidth) - (sbWidth)
    console.log("Index to start ground generation from: " + lastLineStartIndex)
    console.log("Field is length: " + field.length)


    for (groundI = lastLineStartIndex; groundI < field.length; groundI++) {
        field[groundI] = ELEMENT.ground
    }

}

let tiltIndicator = 1 // simulation behaves differently depending on the order of traversal og the field, this moderates that
let localDelta = 0.1 //

let delta = performance.now()

function updateField() {

    let size = fieldSize, gridPos
    //  resetting all status fields to not changed this turn
    const lastTurnStatusesField = JSON.parse(JSON.stringify(fieldStatuses))

    while (size--) fieldStatuses[size] = false;

    delta = performance.now() - delta;

    localDelta += delta


    if (localDelta > Math.sin(HEART.timeSinceStart) * (Math.random() * 360)) {
        localDelta = 0
    }

    // walking

    // if (HEART.timeSinceStart%2>1 || HEART.timeSinceStart%5===1) {
    // if (tiltIndicator % 2 === 0) {
        if (localDelta < (Math.cos(HEART.timeSinceStart))*150) {

        for (i = sbHeight; i > 0; i--) {

            for (j = sbWidth; j > 0; j--) {
                rand = Math.floor(Math.random() * 10)
                gridPos = (i * sbWidth) + j
                if(lastTurnStatusesField[gridPos]=== false) interpretFieldPosition(gridPos, field[gridPos])
            }
        }
        tiltIndicator++
    } else {
        for (i = 0; i < sbHeight; i++) {

            for (j = 0; j < sbWidth; j++) {
                rand = Math.floor(Math.random() * 10)
                gridPos = (i * sbWidth) + j
                interpretFieldPosition(gridPos, field[gridPos])
            }
        }
        tiltIndicator++
    }

    if (tiltIndicator > 70) {
        tiltIndicator = 0
    }

}

function drawGrid() {
    for (let i = 0; i < sbHeight; i++) {
        for (let j = 0; j < sbWidth; j++) {
            // draw the right element at the right spot, an elemental dot, that is
            ctx.fillStyle = findFieldFillType(field[(i * sbWidth) + j])
            ctx.fillRect(drawingOffsetX + j * dotDist, drawingOffsetY + i * dotDist, dotSize, dotSize)
        }
    }
}

function findFieldFillType(field) {
    switch (field) {
        case ELEMENT.none :
            return colorNone;
        case ELEMENT.ground :
            return colorGround;
        case ELEMENT.sand :
            return colorSand;
        case ELEMENT.water :
            return colorWater;
        case ELEMENT.gas:
            return colorGas;
        default :
            return "red"
    }
}

function registerFieldIndexUpdate(index) {
    fieldStatuses[index] = true;
    indexesUpdatedLastTurn.push(index);
}

function setFields_RhumbusFormation(amountToPlace, fieldIndex, element, modX, modY) {
    for (i = 0; i < amountToPlace; i++) {
        let dotIndex = fieldIndex - (fieldIndex % (modX + i)) + (modY * sbWidth)
        field[dotIndex] = element; // rhumbus
        // register new boxes for update new turn
        registerFieldIndexUpdate(4)
    }
}

function setFields_Box(amountToPlace, fieldIndex, element, extent = 3) {

    const surSqaure = fieldSurroundingSquares[fieldIndex]

    field[fieldIndex] = element
    field[surSqaure.UP] = element
    field[surSqaure.UP_LEFT] = element
    field[surSqaure.UP_RIGHT] = element
    field[surSqaure.DOWN] = element
    field[surSqaure.DOWN_LEFT] = element
    field[surSqaure.DOWN_RIGHT] = element
    field[surSqaure.RIGHT] = element
    field[surSqaure.RIGHT] = element

}

function drawGridNumberOverlay() {
    for (i = 0; i < sbHeight; i++) {
        for (j = 0; j < sbWidth; j++) {
            // draw helpful dot indexes
            ctx.fillStyle = "grey"
            ctx.fillText("" + ((i * sbWidth) + j), drawingOffsetX + j * dotDist, drawingOffsetY + i * dotDist + (dotDist / 2))
        }
    }
}

function interpretFieldPosition(gridIndex, type) {

    if (fieldStatuses[gridIndex] === false) {

        // empty field is simply returned, nothing done
        if (type === ELEMENT.none) {
            return
        }

        if (type === ELEMENT.sand) {
            applySandRules(gridIndex)
        }

        if (type === ELEMENT.water) {
            applyWaterRules(gridIndex)
        }

        if (type === ELEMENT.gas) {
            applyGasRules(gridIndex)
        }
    }
}


function checkAndPossibleAdjust(originIndex, actualElement, checkedIndex, elementToCheckFor) {
    if (field[checkedIndex] === elementToCheckFor &&
        inBounds(checkedIndex)
    ) {
        adjustField(originIndex, checkedIndex, actualElement)
        return true
    }
    return false
}

function applySandRules(gridIndex) {
    let surSquares = fieldSurroundingSquares[gridIndex]

    if (field[surSquares.DOWN] === ELEMENT.none) {
        adjustField(gridIndex, surSquares.DOWN, ELEMENT.sand)
        return
    }

    if (field[surSquares.DOWN] === ELEMENT.water) {
        if (
            (fieldStatuses[gridIndex] === false && fieldStatuses[surSquares.DOWN] === false)

        ) {

            if (field[surSquares.LEFT] === ELEMENT.none) {
                adjustField(gridIndex, surSquares.LEFT, ELEMENT.none, ELEMENT.water)
                adjustField(gridIndex, surSquares.DOWN, ELEMENT.sand, ELEMENT.water)
                return
            }
            if (field[surSquares.RIGHT] === ELEMENT.none) {
                adjustField(gridIndex, surSquares.RIGHT, ELEMENT.none, ELEMENT.water)
                adjustField(gridIndex, surSquares.DOWN, ELEMENT.sand, ELEMENT.water)
                return
            }

            adjustField(gridIndex, surSquares.DOWN, ELEMENT.sand, ELEMENT.water)
            return
        }
    }


    rand % 2 === 0 ?
        checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_RIGHT, ELEMENT.none)
        :
        checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_LEFT, ELEMENT.none)
}


function applyWaterRules(gridIndex) {
    let surSquares = fieldSurroundingSquares[gridIndex]

    if (rand % 4 > 2) {

        rand % 2 === 0 ?
            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)

            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_LEFT, ELEMENT.none)

            :
            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_RIGHT, ELEMENT.none)

    } else {

        rand % 2 === 1 ?

            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)

            :
            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)

            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
            //   || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_LEFT, ELEMENT.none)





    }
}

function applyGasRules(gridIndex) {
    let surSquares = fieldSurroundingSquares[gridIndex]

    if (checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP, ELEMENT.none)) {
        return
    }

    rand % 2 === 0 ?
        checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.DOWN_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.DOWN_LEFT, ELEMENT.none)
        :
        checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_LEFT, ELEMENT.none)
}

function inBounds(fieldIndex) {
    return !(fieldIndex === -333)
}

function adjustField(oldFieldPos, newFieldPos, element, replacement = ELEMENT.none) {

    field[oldFieldPos] = replacement
    field[newFieldPos] = element

    fieldStatuses[oldFieldPos] = true
    fieldStatuses[newFieldPos] = true

}

/* Instances contain field indexes of surrounding squares, that is,  */
class SurroundingSquares {
    constructor(gridIndex) {

        const LOC_UP = gridIndex - sbWidth
        const LOC_UP_LEFT = gridIndex - sbWidth - 1
        const LOC_UP_RIGHT = gridIndex - sbWidth + 1
        const LOC_LEFT = gridIndex - 1
        const LOC_RIGHT = gridIndex + 1
        const LOC_DOWN = gridIndex + sbWidth
        const LOC_DOWN_LEFT = gridIndex + sbWidth - 1
        const LOC_DOWN_RIGHT = gridIndex + sbWidth + 1

        this.UP = LOC_UP >= -1 ? LOC_UP : -333 // minus 333 is the blocked value
        this.UP_LEFT = LOC_UP_LEFT % sbWidth === 0 ? -333 : LOC_UP_LEFT
        this.UP_RIGHT = LOC_UP_RIGHT % sbWidth === 0 ? -333 : LOC_UP_RIGHT
        this.LEFT = LOC_LEFT % sbWidth === 0 ? -333 : LOC_LEFT
        this.RIGHT = LOC_RIGHT % sbWidth === 0 ? -333 : LOC_RIGHT
        this.DOWN = LOC_DOWN >= 0 ? LOC_DOWN : -333
        this.DOWN_LEFT = LOC_DOWN_LEFT % sbWidth === 0 ? -333 : LOC_DOWN_LEFT
        this.DOWN_RIGHT = LOC_DOWN_RIGHT % sbWidth === 0 ? -333 : LOC_DOWN_RIGHT
    }
}

SurroundingSquares.prototype.toString = function () {
    const s = 'SurroundingSquares [UP: ' + this.UP + ' ][DOWN: ' + this.DOWN + ']' + '[LEFT: ' + this.LEFT + ' ][RIGHT: ' + this.RIGHT + ']'
    return s
}


function fieldIndexFromXY(x, y) {
    return (x + (y * sbWidth))
}

function getRandomInInterval(min, size) {
    return Math.floor((min + (Math.random() * size + 1)))
}
