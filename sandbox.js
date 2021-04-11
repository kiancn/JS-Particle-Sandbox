let ctx
const SCENEMANAGER = new SceneManager() // manages all objects in scene / canvas / sheet

const field = []

let dotSize = 15
let distFactor = 1
let dotDist = dotSize * distFactor

let drawingOffsetX = 0
let drawingOffsetY = 0

let sbHeight, sbWidth

const colorNone = "#0a0a0a"
const colorGround = "#834c0f"
const colorSand = "#929222"
const colorWater = "#106dcb"

// placement variables
let numberToPlace = 8
let radiusFieldDistance = 4

let drawingCursor
let keydownHandler

const ELEMENT = {
    water: 3,
    sand: 2,
    ground: 1,
    none: 0,
    blocked: -1
}

let currentPlacementElement = ELEMENT.sand

window.addEventListener("load", function () {
    setup()
})

// initialize all variables and start scene
function setup() {
    let canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    _adjustCanvas()

    // calculate sandbox size dependent on canvas size, taking dot size and distance between dots into account
    sbHeight = Math.round((ctx.canvas.height) / (dotSize * distFactor))
    sbWidth = Math.round((ctx.canvas.width) / (dotSize * distFactor))
    console.log(sbHeight)
    console.log(sbWidth)

    createFieldKeeper();
    createDrawingCursorHandler();
    createKeydownHandler();

    GAMEINPUT.startDetectingInput()
    SCENEMANAGER.GAMELOOP.doLoop()
}

function createFieldKeeper() {
    let fieldKeeper = new GameObject("Field Keeper", {
        update: function (gameObject) {
            updateField()
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
            let baseY;
            let baseX;
            if (gameObject.qualia.drawing) {
                // OVERALL: calculate cell touched
                baseX = GAMEINPUT.mouse.x
                baseY = GAMEINPUT.mouse.y

                offsetX = baseX - drawingOffsetX
                offsetY = baseY - drawingOffsetY

                gridX = Math.floor(offsetX / dotDist)
                gridY = Math.floor(offsetY / dotDist)

                fieldIndex = gridX + (gridY * sbWidth)

                switch (currentPlacementElement) {
                    case ELEMENT.water:
                        //2 field[fieldIndex] = ELEMENT.water;
                        for (i = 0; i < numberToPlace; i++) {
                            setField(fieldIndex, ELEMENT.water, getRandomInInterval(-10, 20), getRandomInInterval(-5, 10))
                        }
                        break;
                    case ELEMENT.sand:
                        field[fieldIndex] = ELEMENT.sand;
                        field[fieldIndex - 3 * sbWidth + (rand % 10)] = ELEMENT.sand;
                        field[fieldIndex + 3 * sbWidth + 4] = ELEMENT.sand;
                        break;
                    case ELEMENT.ground:
                        field[fieldIndex] = ELEMENT.ground;
                        break;
                    case ELEMENT.none:
                        field[fieldIndex] = ELEMENT.none;
                        break;
                }


                surSqaures = new SurroundingSquares(fieldIndex)

                ctx.fillStyle = "red"
                ctx.fillText("[X: " + gridX + "] [Y: " + gridY + "] ::: field[" + fieldIndex + "]", 25, 25)
                ctx.fillText(surSqaures.toString(), 25, 40)
            }
        },
        playerInput: function (e) {
            drawingCursor.qualia.drawing = true
        },
        mouseUp: function (e) {
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

                }
            } catch (e) {

            }
        }
    }, true, ctx.canvas.width / 2, 40)
    keydownHandler.sprite = new RenderText("Press 1 to 4 for creative options", keydownHandler, 65, "36px Courier New", "center", "green")

    GAMEINPUT.subscribeToKeyDown(keydownHandler)

    SCENEMANAGER.includeInScene(keydownHandler)
}

function initField() {
    totalPushed = 0
    for (i = 0; i < sbWidth; i++) {
        for (j = 0; j < sbHeight; j++) {
            field.push(ELEMENT.none)
            totalPushed++
        }
    }
    console.log("Total fields pushed: " + totalPushed)

    // making ground
    lastLineStartIndex = (sbHeight * sbWidth) - (sbWidth)
    console.log("Index to start ground generation from: " + lastLineStartIndex)
    console.log("Field is length: " + field.length)

    groundI = lastLineStartIndex
    for (; groundI < field.length; groundI++) {
        field[groundI] = ELEMENT.ground
    }

}

let rand = 1

function updateField() {
    // rand += Math.floor(HEART.timeSinceStart)


    for (i = sbHeight; i > 0; i--) {
        rand++
        for (j = sbWidth; j > 0; j--) {
            //   rand++
            gridPos = (i * sbWidth) + j
            interpretFieldPosition(gridPos, field[gridPos])
        }
    }
}

function drawGrid() {
    for (i = 0; i < sbHeight; i++) {
        for (j = 0; j < sbWidth; j++) {
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
        default :
            return "red"
    }
}

function setField(fieldIndex, element, modX, modY) {
    field[fieldIndex - (rand % modY) * sbWidth - (rand % modX)] = element;
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
}

function applySandRules(gridIndex) {
    let surSquares = new SurroundingSquares(gridIndex)

    if (field[surSquares.DOWN] === ELEMENT.none) {
        adjustField(gridIndex, surSquares.DOWN, ELEMENT.sand)
        return
    }

    rand % 1 === 0 ?
        checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_RIGHT, ELEMENT.none)
        :
        checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_LEFT, ELEMENT.none)

}

function checkAndPossibleAdjust(originIndex, actualElement, checkedIndex, elementToCheckFor) {
    if (field[checkedIndex] === elementToCheckFor &&
        inBounds(checkedIndex)) {
        adjustField(originIndex, checkedIndex, actualElement)
        return true
    }
    return false
}

function applyWaterRules(gridIndex) {
    let surSquares = new SurroundingSquares(gridIndex)

    if (field[surSquares.DOWN] === ELEMENT.none && inBounds(surSquares.DOWN)) {
        adjustField(gridIndex, surSquares.DOWN, ELEMENT.water)
        return
    }

    rand % 2 === 0 ?
        checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)

        :
        checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
}

function inBounds(fieldIndex) {
    return !(fieldIndex === -333)
}

function adjustField(oldFieldPos, newFieldPos, element) {
    field[oldFieldPos] = ELEMENT.none
    field[newFieldPos] = element
}

/* Instances contain field indexes of surrounding squares243 */
class SurroundingSquares {
    constructor(gridIndex) {
        const yNumber = Math.floor(gridIndex / sbWidth)

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
    console.log(min + (Math.random() * size))
    return Math.floor(min + (Math.random() * size))
}
