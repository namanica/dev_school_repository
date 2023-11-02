class Vector {
    constructor(components) {
        this.components = components;
    }

    add(newVector) {
        if (this.components.length !== newVector.components.length) {
            throw new Error("Different length!");
        }
        let res = this.components.map((value, index) => value + newVector.components[index]);
        return new Vector(res);
    }

    subtract(newVector) {
        if (this.components.length !== newVector.components.length) {
            throw new Error("Different length!");
        }
        let res = this.components.map((value, index) => value - newVector.components[index]);
        return new Vector(res);
    }

    dot(newVector) {
        if (this.components.length !== newVector.components.length) {
            throw new Error("Different length!");
        }
        let res = this.components.reduce((accumulator, value, index) => accumulator + (value * newVector.components[index]), 0);
        return res;
    }

    norm() {
        let norm = this.components.reduce((accumulator, value) => accumulator + value ** 2, 0);
        let res = Math.sqrt(norm);
        return res;
    }

    toString() {
        return '(' + this.components.toString() + ')';
    }

    equals(newVector) {
        if (this.components.length !== newVector.components.length) {
            return false;
        }

        for (let i of this.components) {
            if (this.components[i] !== newVector.components[i]) {
                return false;
            } else return true;
        }
    }
}
var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);
console.log(a.add(b));
