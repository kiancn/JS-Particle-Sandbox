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

    createFieldKeeper(); //
    createDrawingCursorHandler();
    createKeydownHandler();
    createFPSTextObject();

    // this is slightly dirty as it violates
    document.onkeydown = function (e) {
        if (e.altKey && e.key === "1") {
            toggleElement('infoContainer')
        }
    }



    makeDragElement(document.getElementById("infoContainer"))


    GAMEINPUT.startDetectingInput()
    SCENEMANAGER.GAMELOOP.doLoop()
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

function drawGrid() {
    for (let i = 0; i < sbHeight; i++) {
        for (let j = 0; j < sbWidth; j++) {
            // draw the right element at the right spot, an elemental dot, that is
            ctx.fillStyle = findFieldFillType(field[(i * sbWidth) + j])
            ctx.fillRect(drawingOffsetX + j * dotDist, drawingOffsetY + i * dotDist, dotSize, dotSize)
        }
    }
}

previousFieldStatuses = [...fieldStatuses]

function drawGridActivity() {


    for (let i = 0; i < sbHeight; i++) {
        for (let j = 0; j < sbWidth; j++) {
            // draw the right element at the right spot, an elemental dot, that is

            if(fieldStatuses[(i * sbWidth) + j]===true){

                if (previousFieldStatuses[(i * sbWidth) + j]===true){
                    ctx.fillStyle = "#d7003d"
                } else{
                    ctx.fillStyle = "#de9007"
                }
            } else if (previousFieldStatuses[(i * sbWidth) + j]===true){
                ctx.fillStyle = "#c3bab5"
            }
            else{
                ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
            }
            ctx.fillRect(drawingOffsetX + j * dotDist, drawingOffsetY + i * dotDist, dotSize, dotSize)
        }
    }
    previousFieldStatuses = [...fieldStatuses]
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


function updateField() {

    let size = fieldSize, gridPos

    while (size--) fieldStatuses[size] = false;

    // walking

    if (tiltIndicator % 2 === 0) {

        for (i = sbHeight; i > 0; i--) {
            // rand = randoms[(tiltIndicator+i)%numberOfRandoms]
            curRand = Math.round(Math.random() * 11)
            for (j = sbWidth; j > 0; j--) {

                gridPos = (i * sbWidth) + j
                interpretFieldPosition(gridPos, field[gridPos])
            }
        }
        tiltIndicator++
    } else {

        for (i = 0; i < sbHeight; i++) {
            // rand = randoms[(tiltIndicator-i)%numberOfRandoms]
            curRand = Math.round(Math.random() * 11)
            for (j = 0; j < sbWidth; j++) {

                gridPos = (i * sbWidth) + j
                interpretFieldPosition(gridPos, field[gridPos])
            }
        }
        tiltIndicator++
    }

    if (tiltIndicator > 7000) {
        tiltIndicator = 0
    }

}

function setFields_RhumbusFormation(amountToPlace, fieldIndex, element, modX, modY) {
    for (i = 0; i < amountToPlace; i++) {
        let dotIndex = fieldIndex - (fieldIndex % (modX + i)) + (modY * sbWidth)
        if (inBounds(dotIndex)) {
            field[dotIndex] = element; // rhumbus
            // register new boxes for update new turn
            registerIndexUpdate(dotIndex)
        }
    }
}

function setFields_Box(amountToPlace, fieldIndex, element, extent = 3) {

    // getting surroundings
    const surSquare = fieldSurroundingSquares[fieldIndex]

    // checking if all places are valid/in bounds
    let allValid = true
    // if fieldIndex requested is invalid, surSquare will be invalid and we bail
    if (typeof surSquare === 'undefined') {
        allValid = false
    } else {

        for (const square in surSquare.list) {
            if (square === -333) {
                allValid = false
                break
            }
        }
    }

    if (allValid) {

        field[fieldIndex] = element
        field[surSquare.UP] = element
        field[surSquare.UP_LEFT] = element
        field[surSquare.UP_RIGHT] = element
        field[surSquare.DOWN] = element
        field[surSquare.DOWN_LEFT] = element
        field[surSquare.DOWN_RIGHT] = element
        field[surSquare.RIGHT] = element


        registerIndexUpdate(fieldIndex)
        registerIndexUpdate(surSquare.UP)
        registerIndexUpdate(surSquare.UP_LEFT)
        registerIndexUpdate(surSquare.UP_RIGHT)
        registerIndexUpdate(surSquare.DOWN)
        registerIndexUpdate(surSquare.DOWN_LEFT)
        registerIndexUpdate(surSquare.DOWN_RIGHT)
        registerIndexUpdate(surSquare.RIGHT)

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

function inBounds(fieldIndex) {
    return !(fieldIndex === -333)
}

function adjustField(oldFieldPos, newFieldPos, element, replacement = ELEMENT.none) {

    field[oldFieldPos] = replacement
    field[newFieldPos] = element

    fieldStatuses[oldFieldPos] = true
    fieldStatuses[newFieldPos] = true
}

function registerIndexUpdate(index) {
    fieldStatuses[index] = true;
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

    curRand % 2 === 0 ?
        checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_RIGHT, ELEMENT.none)
        :
        checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.sand, surSquares.DOWN_LEFT, ELEMENT.none)
}


function applyWaterRules(gridIndex) {
    let surSquares = fieldSurroundingSquares[gridIndex]

    if (curRand % 4 >= 2) {

        curRand % 2 === 0 ?
            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_LEFT, ELEMENT.none)
            :
            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_RIGHT, ELEMENT.none)
    } else {

        curRand % 2 === 0 ?

            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_LEFT, ELEMENT.none)
            :
            checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.DOWN_RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.RIGHT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_LEFT, ELEMENT.none)
            || checkAndPossibleAdjust(gridIndex, ELEMENT.water, surSquares.UP_RIGHT, ELEMENT.none)
    }
}

function applyGasRules(gridIndex) {
    let surSquares = fieldSurroundingSquares[gridIndex]

    if (checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP, ELEMENT.none)) {
        return
    }

    curRand % 2 === 0 ?
        checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_LEFT, ELEMENT.none)
     //   || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_RIGHT, ELEMENT.none)
     //   || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.RIGHT, ELEMENT.none)
     //   || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.DOWN_RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.DOWN_LEFT, ELEMENT.none)
        :
        checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.RIGHT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_RIGHT, ELEMENT.none)
     //   || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.UP_LEFT, ELEMENT.none)
     //   || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.LEFT, ELEMENT.none)
      //  || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.DOWN_LEFT, ELEMENT.none)
        || checkAndPossibleAdjust(gridIndex, ELEMENT.gas, surSquares.DOWN_RIGHT, ELEMENT.none)


}


function fieldIndexFromXY(x, y) {
    return (x + (y * sbWidth))
}

function getRandomInInterval(min, size) {
    return Math.floor((min + (Math.random() * size + 1)))
}

// function used directly in the html, to change drawn element
function switchElement(elementString) {

    switch (elementString) {
        case "sand" :
            currentPlacementElement = ELEMENT.sand;
            keydownHandler.sprite.text = "SAND"
            break;
        case "water" :
            currentPlacementElement = ELEMENT.water;
            keydownHandler.sprite.text = "WATER"
            break;
        case "ground" :
            currentPlacementElement = ELEMENT.ground;
            keydownHandler.sprite.text = "GROUND"
            break;
        case "nothing" :
            currentPlacementElement = ELEMENT.none;
            keydownHandler.sprite.text = "NOTHING"
            break;
        case "gas" :
            currentPlacementElement = ELEMENT.gas
            keydownHandler.sprite.text = " GAS"
    }

}



function switchViewMode(){
    showActivity = !showActivity
}