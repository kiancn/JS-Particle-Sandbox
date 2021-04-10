// Main idea: A scene manager manages all LayerElements in a Scene.
// Create a scenemanager for each scene, and include the gameobjects of devilish design
// Specific responsibilities: 
//  * can include layer-elements and supply them for gameloop for processing
//  * can accept new layer objects, and automatically supply them for gameloop

class SceneManager {

    matterEngine = Matter.Engine.create() // this is the physics engine, probably should not reside here for long

    // should only ever contain LayerElements
    LAYERS = [
        new Layer("norender", []),
        new Layer("background", []),
        new Layer("middleground", []),
        new Layer("actor", []),
        new Layer("foreground", []),
        new Layer("ui", [])
    ] // objects never rendered should be placed in layer 0

    GAMEOBJECTSBYID = {} // Objects containing gameobjects in scene by their id. Do not edit manually

    GAMELOOP = new GameLoop() // gameloop needs to be set 

    /**
     * 
     * @param {GameObject} gameObject : GameObject type object 
     * @param {number} layer : layer defaults to layer 4, termed the 'actor layer'
     * @param {number} priority : higher priority gets drawn later, with objects of same priority the order is unpredicatable (not exactly, but...)
     */
    includeInScene = function (gameObject, layer = 4, priority = 0) {
        let element = new LayerElement(gameObject.name, gameObject, priority)
        this.LAYERS[layer].elements.push(element)

        // sorting array by ascending priority; higher priority gets drawn later, with objects of same priority the order is unpredicatable (not exactly, but)
        this.LAYERS[layer].elements.sort(function (a, b) { return a.priority - b.priority; })
        // include in by-id list
        this.GAMEOBJECTSBYID[gameObject.id] = gameObject

        console.log("SCENEMANANGER: Included + " + SCENEMANAGER.findGameObjectByID(gameObject.id).name + " in scene." )

        // add gameobjects matter.js body to matter.js-world if it exists. This means, don't add the body manually.
        if (gameObject.qualia.body) { Matter.World.add(this.matterEngine.world, [gameObject.qualia.body])
            console.log("SCENEMANANGER: Included + " + SCENEMANAGER.findGameObjectByID(gameObject.id).name + " in MatterJS World." )
        }
    }

    // NOTES: REMOVES FROM scenemanager layers, sorted-by-id and matter.js-world
    removeFromScene = function (gameObject, layer = -1) {

        if(typeof gameObject === 'undefined' || !gameObject){
            console.log("Scenemanager.removeFromScene: Bad GameObject supplied, either null or undefined.")
            return
        }

        // Remove from layer
        let i = layer === -1 ? 0 : layer
        for (; i < this.LAYERS.length; i++) {
            const layer = this.LAYERS[i];

            for (let j = 0; j < layer.elements.length; j++) {
                const layerElement = layer.elements[j];
                if (layerElement.gameObject.id === gameObject.id) {
                    //  console.log("Before Remove::: Layer '" + layer.name + "' member count: " + layer.elements.length)
                    this.LAYERS[i].elements.splice(j, 1)
                    //   console.log("Before Remove::: Layer '" + layer.name + " member count: " + layer.elements.length)
                    break
                }
            }
        }

       
        // Remove from id list
        // console.log("GAMEOBJECTSBYID length: " + Object.keys(this.GAMEOBJECTSBYID).length)
        delete this.GAMEOBJECTSBYID[gameObject.id]
        // console.log("GAMEOBJECTSBYID length: " + Object.keys(this.GAMEOBJECTSBYID).length)

        // Remove from matter.js-world, if there is a matter.js body present
        if (gameObject.qualia.body) {
            //  console.log(this.matterEngine.world.bodies.length)
            Matter.World.remove(this.matterEngine.world, gameObject.qualia.body)
            //  console.log(this.matterEngine.world.bodies.length)
        }
    }
    // returns all gameObjects found by name of gameobject (the searched elements are LayerElements wrapping gameobject)
    findGameObjects = function (name, includePartialMatches = false, layer = 4) {
        const matches = []
        if (layer > -1 || layer < this.LAYERS.length) {
            this.LAYERS[layer].elements.forEach(e => {
                if (!includePartialMatches) {
                    if (e.name === name) { matches.push(e.gameObject) }
                }
                else {
                    if (e.name.includes(name)) { matches.push(e.gameObject) }
                }
            })
        }

        return matches
    }

    /** returns all gameObjects found by id of gameobject (the searched elements are LayerElements wrapping gameobject)
    * Returns undefined if there is no gameObject by that name 
    */
    findGameObjectByID = function (id) {
        return this.GAMEOBJECTSBYID[id]
    }

}