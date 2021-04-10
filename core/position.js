class Transform2D {
    constructor(x, y, rotation = 0, owningObjectID = -1, scale = 1, active = true) {
        
        this.position = {x : 0, y: 0}
        this.position.x = x
        this.position.y = y
        this.rotation = rotation // rotation in euler angles 0-359
        this.scale = scale // value is a percentage of original image/colored-area value

        // change x and y of transform by increment values given: returns new position, access with .x and .y
        this.move = function (x, y) {
            this.position.x += x
            this.position.y += y
            return { x: this.x, y: this.y }
        }

        // change x and y values in one go
        this.newPosition = function (x, y) {
            this.position.x = x
            this.position.y = y
        }

        // fit new rotation value between 0 and 360
        this.normalizeRotationValue = function (rotation) {
            if (rotation >= 360) {
                rotation = rotation - 360
            } else if (rotation < 0) {
                rotation = 360 + rotation
            }
            return rotation
        }

        // rotate transform by value given (euler angles) - returns new 
        this.rotate = function (rotationAdjustment) {
            this.rotation = this.normalizeRotationValue(this.rotation + rotationAdjustment)
            return this.rotation
        }
        // set rotation of transform directly
        this.newRotation = function (newRotation) {
            this.rotation = normalizeRotationValue(newRotation)
        }        

        // Scale object: quality has no direct relation with rendering, but is here to assist that very purpose
        // 1 is 100% 
        // scale is capped low at 0.01
        this.scaleBy = function (scaleAdjustment) {
            if (scale + scaleAdjustment < 0.01) { scale = 0.01 }
            else { scale += scaleAdjustment }
        }
    }
}
