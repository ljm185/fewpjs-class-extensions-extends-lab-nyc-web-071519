// Your code here

class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
    }

    get countSides() {
        return this.sideLengths.length;
    }

    get perimeter() {
        let sum = 0;
        for (let i = 0; i < this.sideLengths.length; i++) {
            sum += this.sideLengths[i];
        }
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) {
            return false;
        } else {
            const firstSide = this.sideLengths[0];
            const secondSide = this.sideLengths[1];
            const thirdSide = this.sideLengths[this.sideLengths.length - 1];
            if ((firstSide + secondSide > thirdSide) && (secondSide + thirdSide > firstSide) && (firstSide + thirdSide > secondSide)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) {
            return false;
        } else {
            if ((this.sideLengths[0] === this.sideLengths[1]) && (this.sideLengths[1] === this.sideLengths[2]) && (this.sideLengths[2] === this.sideLengths[this.sideLengths.length-1]) && (this.sideLengths[this.sideLengths.length-1] === this.sideLengths[0])) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    get area() {
        if (this.isValid) {
            const sideLength = this.sideLengths[0];
            const result = sideLength ** 2;
            return result;
        } else {
            return "That's no square! Try again!"
        }
    }
}