const {Circle, Triangle, Square} = require("./shapes.js")

describe('Circle Test', () => {
    test('render method returns SVG string', () => {
        const shape = new Circle();
        var color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

describe('Triangle Test', () => {
    test('render method returns SVG string', () => {
        const shape = new Triangle();
        var color = ('yellow');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
    });
});

describe('Square Test', () => {
    test('render method returns SVG string', () => {
        const shape = new Square();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
});
