function createFieldKeeper() {
    let fieldKeeper = new GameObject("Field Keeper", {
        update: function (gameObject) {

               if(framesSinceStart%2===0) {
            updateField()
            updateField()
           //  updateField()
            //   drawGridNumberOverlay()
                }

            drawGrid()

            if (showActivity) { // showActivity is set via the keydownhandler (big 'A' press)
                drawGridActivity()
            }

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

                const baseX = GAMEINPUT.mouse.x
                const baseY = GAMEINPUT.mouse.y

                const offsetX = baseX - drawingOffsetX
                const offsetY = baseY - drawingOffsetY

                const gridX = Math.floor(offsetX / dotDist)
                const gridY = Math.floor(offsetY / dotDist)

                fieldIndex = gridX + (gridY * sbWidth)

                if (curRand % 2 === 0) {
                    // OVERALL: calculate cell touched


                    switch (currentPlacementElement) {
                        case ELEMENT.water:
                            setFields_RhumbusFormation(numberToPlace, fieldIndex, ELEMENT.water,
                                getRandomInInterval(-40, 40), getRandomInInterval(-15, 30))
                            setFields_Box(numberToPlace, fieldIndex + getRandomInInterval(-3, 6), ELEMENT.water)
                            break;
                        case ELEMENT.sand:
                            setFields_RhumbusFormation(numberToPlace * 2, fieldIndex, ELEMENT.sand,
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
                    gameObject.sprite.text = "Number placing " + numberToPlace + " each frame mouse button is pushed";
                    break;
                case "k" :
                    numberToPlace = numberToPlace + 1 < 1 ? 1 : numberToPlace + 1
                    gameObject.sprite.text = "Number placing " + numberToPlace + " each frame mouse button is pushed";
                    break
                case "A" :
                    showActivity = !showActivity
                    if (showActivity) {
                        gameObject.sprite.text = "Now showing recent changes overlay (expect FPS drop)";
                    } else {
                        gameObject.sprite.text = "Now showing just simulation";
                    }
            }


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
    keydownHandler.sprite = new RenderText("Draw by clicking! Click icons or press 1 - 5 to select elements. Press ALT + 1 for info.",
        keydownHandler, 65, "25px Consolas", "center", "green")

    GAMEINPUT.subscribeToKeyDown(keydownHandler)

    SCENEMANAGER.includeInScene(keydownHandler)
}

function createFPSTextObject() {
    fpsRenderTextGameObject = new GameObject("FPS Text", {

        deltaTime: 0,
        lastTime: 0,
        accumDelta: 0,
        update: function (gameObject) {

            framesSinceStart = framesSinceStart + 1

            gameObject.qualia.deltaTime = HEART.timeSinceStart - gameObject.qualia.lastTime
            gameObject.qualia.lastTime = HEART.timeSinceStart

            gameObject.qualia.accumDelta += gameObject.qualia.deltaTime

            //   console.log("Last time:\t" + gameObject.qualia.lastTime + "\tNow:\t" + HEART.timeSinceStart + "\tdT\t" + gameObject.qualia.deltaTime)

            // update only every second frame
            if (framesSinceStart % 15 === 0) {


                gameObject.sprite.text = ("FPS " + Math.floor(1 / (gameObject.qualia.accumDelta / 15))).toString()
                // gameObject.sprite.text = ("FPS " + Math.floor(framesSinceStart / (gameObject.qualia.deltaHistory / 1000))).toString()
                gameObject.qualia.accumDelta = 0
            }
        }
    }, true)
    fpsRenderTextGameObject.transform.position.x = ctx.canvas.width - 90
    fpsRenderTextGameObject.transform.position.y = 60

    fpsRenderTextGameObject.sprite = new RenderText("FPS",
        fpsRenderTextGameObject, 65, "25px Courier New", "center", "white")
    SCENEMANAGER.includeInScene(fpsRenderTextGameObject, 5)
}