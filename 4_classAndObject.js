// Define a parent class called Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    // Method to get the color of the shape
    getColor() {
        return this.color;
    }
}

// Define a child class called Circle that extends Shape
class Circle extends Shape {
    constructor(color, radius) {
        // Call the constructor of the parent class using super()
        super(color);
        this.radius = radius;
    }

    // Method to calculate the area of the circle
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Create an instance of the Circle class
const myCircle = new Circle('red', 5);

// Output the color of the circle
console.log("Color of the circle:", myCircle.getColor());

// Output the area of the circle
console.log("Area of the circle:", myCircle.getArea());
