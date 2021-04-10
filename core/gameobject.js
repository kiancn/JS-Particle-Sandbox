// please do not modify content of this object directly
const GAMEOBJECTINTERNAL = {
    lockKey: 192321,
    idCounter: 0, // there will NOT be more than number.maxvalue entities :p Jinx
    getNewId : function getNewId(key) {
    if (key !== GAMEOBJECTINTERNAL.lockKey) {
        console.log("Do not call this method directly. IDs are assigned implicitly at construction. -1 returned, not real")
        return -1;
    } else {
        return ++GAMEOBJECTINTERNAL.idCounter
    }
}
}
// The game object is meant to be extented: 
class GameObject {
    constructor(name, qualia, active = true,x=0,y=0, sprite = null) {
        this.name = name
        this.id = GAMEOBJECTINTERNAL.getNewId(GAMEOBJECTINTERNAL.lockKey)
        this.activeInScene = active
        this.transform = new Transform2D(x, y)
        this.sprite = sprite == null ? new Sprite("resources/images/messages/NoRendererSet.png",this): sprite// this should be Sprite class object (renderer2D)
        this.notRenderable = false // important, non-rendered GOs must set this to true
        // qualia are fields and methods to be associated with the game in the shape of an object literal
        // Supply onEnable, onDisable, update as keys for methods in object literal to have these methods pulled appropriately
        this.qualia = qualia
    //    this.manualRemove = false // set to true if there is a custom implementation of object removal
    }
}
