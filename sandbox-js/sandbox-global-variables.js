// the intention of this file is to keep any global

let ctx
const SCENEMANAGER = new SceneManager() // manages all objects in scene / canvas / sheet

// ELEMENTS works as a set of named int values, each representing an element.
const ELEMENT = {
    gas: 4,
    water: 3,
    sand: 2,
    ground: 1,
    none: 0,
    blocked: -1
}

/* represents the CONTENTS of the simulated field */
const field = []

/* represents the state of each position in field as bools:
* false means that a position has had no change current frame
* true means that a position has already changed during current frame
* The purpose is to prevent a field from changing state many times during a single frame.
* */
const fieldStatuses = []

/* member represent the surrounding of each position in the field  */
const fieldSurroundingSquares = []

/*size of individual dot*/
let dotSize = 10
let distFactor = 1 // proportional distance between dots (actual distance will change with dot size distance)
let dotDist = dotSize * distFactor

let drawingOffsetX = 0 // x pixel-distance from window left edge
let drawingOffsetY = 0 // y  pixel-distance from window top

/*sbHeight is the number of (virtual) lines in the simulated field */
let sbHeight
/*sbWidth is the length of each line of the simulated field */
let sbWidth
/*fieldSize is the number of dots in the field (that is simulated)*/
let fieldSize

/* indicated whether to draw the activity of the simulation*/
let showActivity = false

// the colors used to color the canvas to indicate present element state
const colorNone = "#0a0a0a"
const colorGround = "#834c0f"
const colorSand = "#929222"
const colorWater = "#106dcb"
const colorGas = "#a19897"


// ## Scene Object ##
let drawingCursor // the object that handles mouse clicks
let keydownHandler // the object that handles keyboard keydown-events
let fpsRenderTextGameObject; // keeps track of and orders display of fps counter

// used to calculate fps by fpsRenderTextGameObject
let framesSinceStart = 0;

// indicates the type of element that a mouse click will place in the sim
let currentPlacementElement = ELEMENT.sand
// indicates amount-factor for by-mouse-element (keydownHandler has responsibility )
let numberToPlace = 2

// number used by the elements algorithm (various xRules()), changed in updateField()
let curRand = 1

// simulation behaves differently depending on the order of traversal of the field, this moderates that
let tiltIndicator = 1
