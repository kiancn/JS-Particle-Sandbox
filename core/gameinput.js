const GAMEINPUT = {
    // subscriber lists should contain only callback methods, taking a single parameter for keystroke
    keyDownSubscribers: [],
    mouseDownSubscribers: [],
    mouseUpSubscribers: [],
    // x and y will always be updated if startDetectingInput has been pulled.
    mouse: [x = 0, y = 0],
    _interpretKey: function (e) {
        let keynum;

        if (window.event) { // IE                  
            keynum = e.keyCode;
        } else if (e.which) { // Netscape/Firefox/Opera                 
            keynum = e.which;
        }

        lastKeyStroke = String.fromCharCode(keynum)

        GAMEINPUT._informKeyDownSubscribers(lastKeyStroke)
    },
    _interpretMouseMove: function (e) {
        GAMEINPUT.mouse.x = e.pageX
        GAMEINPUT.mouse.y = e.pageY
    },
    _informKeyDownSubscribers: function (keyStroke) {

        for (let index = 0; index < GAMEINPUT.keyDownSubscribers.length; index++) {
            const sub = GAMEINPUT.keyDownSubscribers[index];
            sub.qualia.playerInput(keyStroke, sub)
        }
    },
    subscribeToKeyDown: function (gameObject) {
        if (GAMEINPUT.keyDownSubscribers.indexOf(gameObject) === -1) {
            GAMEINPUT.keyDownSubscribers.push(gameObject)
        }
    },
    unsubscribeFromKeyDown: function (gameObject) {
        indexOfCallback = GAMEINPUT.keyDownSubscribers.indexOf(gameObject)
        if (indexOfCallback !== -1) {
            GAMEINPUT.keyDownSubscribers.splice(indexOfCallback, 1)
        } else {
            console.log("Gameobject ID: " + gameObject.id + "\tName: " + gameObject.name +
                "\nRequest to unsubscribe callback from keydown press failed. Callback not found.")
        }
    },
    _informMouseDownSubscribers: function (mouseEvent) {
        for (let index = 0; index < GAMEINPUT.mouseDownSubscribers.length; index++) {
            const sub = GAMEINPUT.mouseDownSubscribers[index];
            sub.qualia.playerInput(mouseEvent, sub)
        }
    },
    subscribeToMouseDown: function (gameObject) {
        if (GAMEINPUT.mouseDownSubscribers.indexOf(gameObject) === -1) {
            GAMEINPUT.mouseDownSubscribers.push(gameObject)
        } else {
            console.log("Could not create subscription for " + gameObject.name + " [" + gameObject.id + "]" + " not possible. Already included ")
        }
    },
    unsubscribeFromMouseDown: function (gameObject) {
        indexOfCallback = GAMEINPUT.keyDownSubscribers.indexOf(gameObject)
        if (indexOfCallback !== -1) {
            GAMEINPUT.mouseDownSubscribers.splice(indexOfCallback, 1)
        } else {
            console.log("Request to unsubscribe callback from keydown press failed. Callback not found")
        }
    },
    subscribeToMouseUp : function(gameObject){
        // if the gameobject is not already subscribed.
        if(GAMEINPUT.mouseUpSubscribers.indexOf(gameObject) ===-1){
            GAMEINPUT.mouseUpSubscribers.push(gameObject)
        }else{
            console.log("Gameobject ID: " + gameObject.id + "\tName: " + gameObject.name +
                "\nTried to subscribe to mouse up, but GameObject was already subscribed.")
        }
    },
    startDetectingInput: function () {
        window.addEventListener("keydown", this._interpretKey)
        document.body.addEventListener("mousemove", this._interpretMouseMove)
        document.body.addEventListener("mousedown", this._informMouseDownSubscribers)
    }
}
