
function createFieldKeeper() {
    let fieldKeeper = new GameObject("Field Keeper", {
        update: function (gameObject) {

            let previousActivity = fieldStatuses.splice()


            updateField()
            // updateField()
            //  updateField()

            drawGrid()

            if(showActivity) {
                console.log("Showing activity")
                drawGridActivity()
            }

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

                if(curRand%4===0) {
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
                            setFields_RhumbusFormation(numberToPlace*2, fieldIndex, ELEMENT.sand,
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
                    break
                case "A" :
                    showActivity = !showActivity
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