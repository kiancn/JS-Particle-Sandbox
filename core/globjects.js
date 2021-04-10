// File contains the single GLOBJECTS object
// Purpose of the object is provide simplified Game Loop object creation
const GLOBJECTS = {
    /** Returns a GameObject with a Matter body polygon.
     * If activeOnCreate parameter is set to true, function also puts the created
     * GameObject into the scene and the Matter.js into it's 'world'.
     * Always returns the created GameObject.
     */
    createRegularPolygonMatter: function (name, startX, startY, numberOfSides, radius, options = {}, activeOnCreate = true) {
        let polygon = new GameObject(name, { // the gameobject with the business logic for each square
            update: function (gameObject) {
                gameObject.transform.position.x = gameObject.qualia.body.position.x
                gameObject.transform.position.y = gameObject.qualia.body.position.y
                gameObject.transform.rotation = (gameObject.qualia.body.angle * 57.29578) // radians to euler angle
            },
            //  body: matterJSPolygon
        }, true, startX, startY)

        polygon.name += " " + polygon.id // updating name for debugging purps
        polygon.sprite = new RegularPolygonMatter(polygon, numberOfSides, radius) // this is the drawn sprite

        let matterJSPolygon = Matter.Bodies.fromVertices(startX, startY, polygon.sprite.vertices, options)

        polygon.qualia.body = matterJSPolygon

        if (activeOnCreate) {      
            SCENEMANAGER.includeInScene(polygon)
        }
        return polygon
    },

    /** Returns a GameObject with a Matter body polygon.
     * If activeOnCreate parameter is set to true, function also puts the created
     * GameObject into the scene and the Matter.js into it's 'world'.
     * Always returns the created GameObject.
     */
    createRegularPolygon: function (name, startX, startY, numberOfSides, radius, options = {}, activeOnCreate = true) {
        let polygon = new GameObject(name, { // the gameobject with the business logic for each square
            update: function (gameObject) {
//                gameObject.transform.position.x = gameObject.qualia.body.position.x
  //              gameObject.transform.position.y = gameObject.qualia.body.position.y
    //            gameObject.transform.rotation = (gameObject.qualia.body.angle * 57.29578) // radians to euler angle
            },
            //  body: matterJSPolygon
        }, true, startX, startY)

        polygon.name += " " + polygon.id // updating name for debugging purps
        polygon.sprite = new RegularPolygonMatter(polygon, numberOfSides, radius) // this is the drawn sprite

        let matterJSPolygon = Matter.Bodies.fromVertices(startX, startY, polygon.sprite.vertices, options)

        polygon.qualia.body = matterJSPolygon

        if (activeOnCreate) {
            SCENEMANAGER.includeInScene(polygon)
        }
        return polygon
    }
}