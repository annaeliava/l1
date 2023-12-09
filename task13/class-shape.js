// Задача на классы и наследование: 
// создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, 
// такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    constructor() {
        this.figure = 'unknown figure';
        this.area = 0;
        this.perimeter = 0;
    }

    getLowerCase() {
        // меняем регистр 'this.figure'
        let figure = this.figure.toLowerCase();
        return figure;
    }

    getArea() {
        let figure = this.getLowerCase();
        return `the area of ${figure}: ${this.area}`;
    }

    getPerimeter() {
        let figure = this.getLowerCase();
        return `the perimeter of ${figure}: ${this.perimeter}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.figure = 'Rectangle';
        this.width = width;
        this.height = height;
    }

    getArea() {
        // вычисляем площадь 
        this.area = this.width * this.height;
        // возвращаем ответ
        return super.getArea();
    }

    getPerimeter() {
        // вычисляем периметр
        this.perimeter = (this.width + this.height)*2;
        // возвращаем ответ
        return super.getPerimeter();
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.figure = 'Circle';
        this.radius = radius;
    }

    slicePi() {
        // оставляем "14" после запятой в число пи 
        let pi = Number(Math.PI.toFixed(2));
        return pi;
    }

    getArea() {
        let pi = this.slicePi();
        // вычисляем площадь
        this.area = pi * Math.pow(this.radius, 2);
        // возвращаем ответ
        return super.getArea();
    }

    getPerimeter() {
        let pi = this.slicePi();
        // вычисляем периметр
        this.perimeter = 2 * pi * this.radius;
        // вычисляем ответ
        return super.getPerimeter();
    }
}

class Triangle extends Shape {
    constructor(a, b, c, height) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.height = height;
        this.figure = 'Triangle';
    }

    getArea() {
        // вычисляем площадь
        this.area = 0.5 * this.c * this.height;
        // возвращаем ответ
        return super.getArea();
    }

    getPerimeter() {
        // вычисляем периметр 
        this.perimeter = this.a + this.b + this.c;
        // возвращаем ответ
        return super.getPerimeter();
    }
}

let shape = new Shape('triangle');
console.log(shape.getArea()); // the area of unknown figure: 0
console.log(shape.getPerimeter()); // the perimeter of unknown figure: 0

let rectangle = new Rectangle(10,7);
console.log(rectangle.getArea()); // the area of rectangle: 70
console.log(rectangle.getPerimeter()); // the perimeter of rectangle: 34
console.log(rectangle); // Rectangle {figure: 'Rectangle', area: 70, perimeter: 34, width: 10, height: 7}

let circle = new Circle(6);
console.log(circle.getArea()); // the area of circle: 113.04
console.log(circle.getPerimeter()); // the perimeter of circle: 37.68
console.log(circle); // Circle {figure: 'Circle', area: 113.04, perimeter: 37.68, radius: 6}

let triangle = new Triangle(10, 10, 16, 6);
console.log(triangle.getArea()); // the area of triangle: 48
console.log(triangle.getPerimeter()); // the perimeter of triangle: 36
console.log(triangle); // Triangle {figure: 'Triangle', area: 48, perimeter: 36, a: 10, b: 10, …}