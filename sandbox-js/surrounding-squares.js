/* Instances contain field indexes of surrounding squares, that is, the six immediate */
class SurroundingSquares {
    constructor(gridIndex) {

        const LOC_UP = gridIndex - sbWidth
        const LOC_UP_LEFT = gridIndex - sbWidth - 1
        const LOC_UP_RIGHT = gridIndex - sbWidth + 1
        const LOC_LEFT = gridIndex - 1
        const LOC_RIGHT = gridIndex + 1
        const LOC_DOWN = gridIndex + sbWidth
        const LOC_DOWN_LEFT = gridIndex + sbWidth - 1
        const LOC_DOWN_RIGHT = gridIndex + sbWidth + 1

        this.UP = LOC_UP >= -1 ? LOC_UP : -333 // minus 333 is the blocked value
        this.UP_LEFT = LOC_UP_LEFT % sbWidth === 0 ? -333 : LOC_UP_LEFT
        this.UP_RIGHT = LOC_UP_RIGHT % sbWidth === 0 ? -333 : LOC_UP_RIGHT
        this.LEFT = LOC_LEFT % sbWidth === 0 ? -333 : LOC_LEFT
        this.RIGHT = LOC_RIGHT % sbWidth === 0 ? -333 : LOC_RIGHT
        this.DOWN = LOC_DOWN >= 0 ? LOC_DOWN : -333
        this.DOWN_LEFT = LOC_DOWN_LEFT % sbWidth === 0 ? -333 : LOC_DOWN_LEFT
        this.DOWN_RIGHT = LOC_DOWN_RIGHT % sbWidth === 0 ? -333 : LOC_DOWN_RIGHT

        this.list = [gridIndex, this.UP, this.UP_LEFT, this.LEFT, this.DOWN_LEFT, this.DOWN,
            this.DOWN_RIGHT, this.RIGHT, this.UP_RIGHT]
        //  2   1   8       UP_LEFT UP  UP_RIGHT
        //  3   0   7       LEFT    0   RIGHT
        //  4   5   6       DOWN_L  DOWN DOWN_R
    }
}

SurroundingSquares.prototype.toString = function () {
    return 'SurroundingSquares [UP: ' + this.UP + ' ][DOWN: ' + this.DOWN + ']' + '[LEFT: ' + this.LEFT + ' ][RIGHT: ' + this.RIGHT + ']'
}