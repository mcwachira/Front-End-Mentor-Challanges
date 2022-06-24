class Rectangle {

    constructor(width, height, color){
        console.log('constructor runs only once')
        this.width = width;
        this.height=height;
        this.color=color
    }
    get Area() {
        return this.height * this.width
    }
}

let myRectangle = new Rectangle( 4, 8, 'blue') 

let myRectangleTwo = new Rectangle(25 ,5) 

console.log(myRectangleTwo.Area)
console.log(myRectangle)

