class GameLoop {
    intervalBetweenGameFrames = 16 // ~60 fps in miliseconds
    doLoop = function () {
        
        HEART.beat() // updates the timetracker

        _adjustCanvas() // functions from renderer2D
        _clearCanvas() 

        // Round one: UPDATE all object states
        for (let i = 0; i < SCENEMANAGER.LAYERS.length; i++) {
            const layer = SCENEMANAGER.LAYERS[i];
            for (let j = 0; j < layer.elements.length; j++) {
                layer.elements[j].gameObject.qualia.update(layer.elements[j].gameObject)
            }
        }

        // update physics
        Matter.Engine.update(SCENEMANAGER.matterEngine)
        
        // Round two: RENDER all active and renderable objects
        // counter starts at one, because layer 0 is never rendered (it is updated)
        for (let i = 1; i < SCENEMANAGER.LAYERS.length; i++) {
            const layer = SCENEMANAGER.LAYERS[i];
            for (let j = 0; j < layer.elements.length; j++) {
                if (layer.elements[j].gameObject.activeInScene && !layer.elements[j].gameObject.notRenderable) {
                    layer.elements[j].gameObject.sprite.render()                   
                }
            }
        }
 

        // plan next loop
      //  setTimeout(SCENEMANAGER.GAMELOOP.doLoop,16)
       requestAnimationFrame(SCENEMANAGER.GAMELOOP.doLoop)
    }
    
    setFPS = function (fps) {
        this.intervalBetweenGameFrames = 1/fps
    }
}
