class LayerElement {
    constructor(name, gameObject,priority=0) {        
        this.name = name
        this.gameObject = gameObject // should of course be or correspond to a GameObject        
        this.priority = priority // multiple objects in the same spot+same layer will have different priority; lower (<) priority gets drawn first (not implimented)
    }
}

class Layer {
    constructor(name,layerElements = []) {
        this.name = name
        this.elements = layerElements // should only contain LayerElements
    }
}